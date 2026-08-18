# Mahindra eSUV Manual → PDF Converter

This repository contains a simple JavaScript script that converts the Mahindra online owner's manual into a downloadable PDF.

Mahindra currently hosts the manuals online at:

https://mvault.mahindra.com/owners_manual

However, there is no direct option to download the full manual as a PDF for offline use.
The script loads the saved .mhtml file using Puppeteer and prints it to a PDF.

---

## Disclaimer

This project is **not affiliated with Mahindra Automotive**.

The script simply converts a locally saved webpage into a PDF using Puppeteer.
Use it at your own risk. The author is not responsible for any issues resulting from using this script.

---

Current manuals list:-
| Vehicle Model | Manual Edition | Status / Link |
| :--- | :--- | :--- |
| **BE6** | August 2026 | [Download PDF](#) |
| **BE6 FE** | August 2026 | [Download PDF](#) |
| **BE6 SporTEQ** | August 2026 | [Download PDF](#) |
| **XEV 9E** | August 2026 | [Download PDF](#) |
| **XEV 9S** | August 2026 | [Download PDF](#) |

---

## Requirements

1. [Node.js](https://nodejs.org/en/download/current)
2. Google Chrome
3. Terminal / Command Prompt
4. Optional: A PDF compressor
5. [PDFGear](https://www.pdfgear.com/)

Tested on **Windows 11**, but it should also work on macOS and Linux.

---

## Steps

### 1. Open the Manual

Go to:

https://mvault.mahindra.com/owners_manual

Open the manual you want.

---

### 2. Save the Page

Save the page as: `Manual.mhtml`

Important:

Do **NOT** save as HTML.
You must save it as **MHTML**.

---

### 3. Download the Script

Download: [mhtml_to_pdf.js](https://github.com/chiragkrishna/Mahindra-eSUVs-Manual-Downloader/blob/main/mhtml_to_pdf.js)

---

### 4. Place Files in the Same Folder

Your folder should contain:

```
Manual.mhtml
mhtml_to_pdf.js
```

---

### 5. Install Puppeteer

Run:

```bash
npm install puppeteer
```

---

### 6. Run the Script

```bash
node mhtml_to_pdf.js "Manual.mhtml" "Vehicle_Manual.pdf"
```

---

### 7. Compress the PDF (Optional)

The generated PDF may be large.

You can compress it using tools like:

- PDFGear
- Adobe Acrobat
- Any PDF compressor

---

## Survey of Mahindra eSUV's

Recent survey regarding problems with Mahindra eSUV's was done in March 2026. Details can be found [Here](https://github.com/chiragkrishna/Mahindra-eSUVs-Manual-Downloader/tree/main/Survey)
