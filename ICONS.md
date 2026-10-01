# Icon Setup

The extension requires three PNG icons at different sizes. You have three options:

## Option 1: Auto-Generate (Recommended)

Install dependencies and run the generator:

```bash
npm install sharp
node scripts/generate-icons.js
```

This will create all three icons from the SVG template automatically.

## Option 2: Online Tool

1. Go to [Favicon Generator](https://favicon.io/)
2. Create a simple icon (e.g., "G" with a slash through it)
3. Download the PNG files
4. Save as:
   - `icons/16.png`
   - `icons/48.png`
   - `icons/128.png`

## Option 3: Design Software

Create a 128×128px PNG image in Photoshop, Figma, or similar, then:

1. Save the original as `icons/128.png`
2. Scale down to 48×48px and save as `icons/48.png`
3. Scale down to 16×16px and save as `icons/16.png`

## Icon Ideas

- Google "G" with a prohibition symbol
- Magnifying glass with an AI badge crossed out
- Simple text: "AI"
- Google logo with a minus sign

---

The extension will not load without these icons. After creating them, reload the extension in `chrome://extensions/`.
