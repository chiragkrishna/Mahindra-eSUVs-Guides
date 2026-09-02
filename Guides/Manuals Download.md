# 📥 How to Download & Convert Mahindra eSUV Manuals to PDF

Mahindra hosts official owner's manuals online via the [mVault Owners Portal](https://mvault.mahindra.com/owners_manual). Because there is no direct "Download PDF" option, this tool uses a headless Chrome browser (**Puppeteer**) to parse a locally saved `.mhtml` web archive of the manual and compile it into a single PDF document.

---

## 💻 Prerequisites

Before running the conversion script, ensure your system meets the following requirements:

1. **[Node.js](https://nodejs.org/)** (v18.0.0 or higher recommended)
2. **Google Chrome** browser installed
3. Terminal / Command Line access
4. *(Optional)* A PDF compression utility like **[PDFgear](https://www.pdfgear.com/)** or Adobe Acrobat

> **Supported Operating Systems:** Windows 11 / 10, macOS, and Linux.

---

## 🛠️ Step-by-Step Conversion Process

### Step 1: Save the Online Manual as `.mhtml`

1. Open **Google Chrome** and navigate to [https://mvault.mahindra.com/owners_manual](https://mvault.mahindra.com/owners_manual).
2. Select your specific eSUV model and let the full manual load completely in your browser.
3. Open the Save Dialog:
   * **Windows:** Press `Ctrl + S`
   * **macOS:** Press `Cmd + S`
4. In the **Save as type** dropdown, select **Webpage, Single File (`.mhtml`)**.
5. Rename the file to `Manual.mhtml` and save it to your local working directory.

> ⚠️ **Important:** Do **NOT** save as standard HTML (`.html` / `.htm`). Puppeteer requires the single-file archive `.mhtml` format to package graphics, styles, and vector elements properly into the PDF.

---

### Step 2: Prepare the Workspace

Clone this repository or download [`mhtml_to_pdf.js`](https://github.com/chiragkrishna/Mahindra-eSUVs-Guides/blob/main/Tools/mhtml_to_pdf.js). Place your saved `Manual.mhtml` file into the exact same folder:

```text
my-manual-folder/
├── Manual.mhtml
└── mhtml_to_pdf.js
```

---

### Step 3: Install Puppeteer & Convert

Open your terminal or command prompt inside the directory and run the following commands:

```bash
# 1. Install Puppeteer dependency
npm install puppeteer

# 2. Run the conversion script
node mhtml_to_pdf.js "Manual.mhtml" "Vehicle_Manual.pdf"
```

The conversion script will launch a background headless browser instance, render the document layout, and compile `Vehicle_Manual.pdf`.

---

### Step 4: Compress the Output (Optional)

Because the script renders full-resolution images and vectors directly from the portal, output PDF files can be large (500MB+). 

To optimize the manual for mobile viewing or quick sharing:
* Open the converted PDF in **PDFgear** or Adobe Acrobat.
* Perform a standard **PDF Compression / Optimize** pass.
* Save the compressed file for fast offline access on your phone or tablet.

**Ghostscript**
```bash
gs -sDEVICE=pdfwrite \
   -dCompatibilityLevel=1.4 \
   -dPDFSETTINGS=/ebook \
   -dNOPAUSE -dBATCH \
   -sOutputFile=Vehicle_Manual_compressed.pdf Vehicle_Manual.pdf
```
