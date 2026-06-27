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

    page.setDefaultTimeout(0);
    page.setDefaultNavigationTimeout(0);

    console.log("Loading MHTML...");

    await page.goto("file://" + path.resolve(input), {
      waitUntil: "domcontentloaded",
      timeout: 0,
    });

    // Wait until the page has finished loading
    await page.waitForFunction(() => document.readyState === "complete", {
      timeout: 0,
    });

    // Give Chromium a little extra time to finish rendering MHTML resources
    await sleep(2000);

    const frames = page.frames();

    console.log(`Found ${frames.length} frames`);

    let mainFrame = null;
    let maxSize = 0;

    for (let i = 0; i < frames.length; i++) {
      try {
        // Faster than serializing the full HTML
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

    console.log("Extracting main manual...");

    const html = await mainFrame.content();

    console.log("Rendering merged document...");

    await page.setContent(html, {
      waitUntil: "domcontentloaded",
      timeout: 0,
    });

    await page.waitForFunction(() => document.readyState === "complete", {
      timeout: 0,
    });

    try {
      await page.evaluateHandle(() => document.fonts.ready);
    } catch {}

    // Small delay for image layout stabilization
    await sleep(2000);

    console.log("Generating PDF...");

    await page.pdf({
      path: output,
      format: "A4",
      printBackground: true,
      preferCSSPageSize: true,
      scale: 1,
    });

    console.log("PDF created:", output);
  } finally {
    await browser.close();
  }
})();
