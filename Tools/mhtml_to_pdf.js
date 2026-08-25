const puppeteer = require("puppeteer");
const path = require("path");

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

(async () => {
  const input = process.argv[2];
  const output = process.argv[3] || "output.pdf";

  if (!input) {
    console.log("Usage: node mhtml_to_pdf.js input.mhtml output.pdf");
    process.exit(1);
  }

  const browser = await puppeteer.launch({
    headless: true,
    args: [
      "--no-sandbox",
      "--disable-dev-shm-usage",
      "--disable-background-networking",
      "--disable-sync",
      "--disable-extensions",
      "--disable-component-update",
      "--disable-default-apps",
      "--disable-features=TranslateUI",
      "--metrics-recording-only",
      "--mute-audio",
    ],
  });

  try {
    const page = await browser.newPage();

    // Forward browser-context console.log/warn/error to the terminal —
    // without this, the "No matching element for ..." warnings from the
    // link-rewrite step below run inside the page and never reach you.
    page.on("console", (msg) => console.log("PAGE LOG:", msg.text()));

    page.setDefaultTimeout(0);
    page.setDefaultNavigationTimeout(0);

    console.log("Loading MHTML...");

    await page.goto("file://" + path.resolve(input), {
      waitUntil: "domcontentloaded",
      timeout: 0,
    });

    await page.waitForFunction(() => document.readyState === "complete", {
      timeout: 0,
    });

    await sleep(2000);

    const frames = page.frames();
    console.log(`Found ${frames.length} frames`);

    let mainFrame = null;
    let maxSize = 0;

    for (let i = 0; i < frames.length; i++) {
      try {
        const score = await frames[i].evaluate(() => {
          const body = document.body;
          if (!body) return 0;

          return (
            body.textContent.length +
            document.images.length * 500 +
            document.querySelectorAll("table").length * 100
          );
        });

        console.log(`Frame ${i}: score ${score}`);

        if (score > maxSize) {
          maxSize = score;
          mainFrame = frames[i];
        }
      } catch {
        console.log(`Frame ${i}: skipped`);
      }
    }

    if (!mainFrame) {
      throw new Error("Could not locate main manual frame.");
    }

    console.log(
      "Unlocking fixed heights and scroll containers in main frame...",
    );

    // CRITICAL STEP: Expand all fixed heights & visibility hidden blocks inside the target frame
    await mainFrame.evaluate(() => {
      // 1. Unhide hidden topics/divs
      document.querySelectorAll("*").forEach((el) => {
        const style = window.getComputedStyle(el);
        if (style.display === "none") {
          el.style.display = "block";
        }
        if (style.visibility === "hidden") {
          el.style.visibility = "visible";
        }
        // 2. Remove fixed height locks and scrolling restrictions
        if (style.position === "fixed" || style.position === "absolute") {
          el.style.position = "static";
        }
        el.style.height = "auto";
        el.style.maxHeight = "none";
        el.style.overflow = "visible";
      });

      // 3. Force body and html to take full flow length
      document.documentElement.style.height = "auto";
      document.documentElement.style.overflow = "visible";
      document.body.style.height = "auto";
      document.body.style.overflow = "visible";

      // 4. Rewrite index/TOC links so they jump to internal anchors
      // in the exported PDF instead of trying to open a browser to
      // the original mvault.mahindra.com URL.
      document.querySelectorAll("a[href]").forEach((a) => {
        const href = a.getAttribute("href");
        const hashIndex = href.indexOf("#");
        if (hashIndex === -1) return; // no fragment, leave it alone

        const fragment = href.slice(hashIndex); // e.g. "#SafetySymbols-DD3DB70E"
        const id = fragment.slice(1);

        // getElementById is safer than querySelector here since these ids
        // can contain characters that trip up CSS selector parsing
        if (document.getElementById(id)) {
          a.setAttribute("href", fragment);
        } else {
          console.warn("No matching element for", fragment);
        }
      });
    });

    console.log("Extracting un-shackled manual HTML...");
    const html = await mainFrame.content();

    console.log("Rendering expanded document...");

    await page.setContent(html, {
      waitUntil: "domcontentloaded",
      timeout: 0,
    });

    // Inject print layout CSS to force full page continuous printing
    await page.addStyleTag({
      content: `
        @media print {
          html, body { height: auto !important; overflow: visible !important; }
          * { overflow: visible !important; position: static !important; }
        }
      `,
    });

    await page.waitForFunction(() => document.readyState === "complete", {
      timeout: 0,
    });

    try {
      await page.evaluateHandle(() => document.fonts.ready);
    } catch {}

    await sleep(2000);

    console.log("Generating multi-page PDF...");

    await page.pdf({
      path: output,
      format: "A4",
      printBackground: true,
      preferCSSPageSize: false,
      margin: { top: "15mm", bottom: "15mm", left: "15mm", right: "15mm" },
    });

    console.log("PDF created successfully:", output);
  } finally {
    await browser.close();
  }
})();
