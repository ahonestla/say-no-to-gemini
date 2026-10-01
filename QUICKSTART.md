# Quick Start

Get Say No To Gemini running in 2 minutes.

## Step 1: Generate Icons

```bash
cd say-no-to-gemini
npm install sharp
node scripts/generate-icons.js
```

Or manually create three PNG files in `icons/`:

- `16.png` (16×16px)
- `48.png` (48×48px)
- `128.png` (128×128px)

See [ICONS.md](ICONS.md) for options.

## Step 2: Load in Chrome

1. Open `chrome://extensions/`
2. Toggle **Developer mode** (top-right)
3. Click **Load unpacked**
4. Select the `say-no-to-gemini` folder
5. Done!

## Step 3: Test It

1. Click the extension icon in your toolbar
2. Ensure **Extension Enabled** is toggled on
3. Go to google.com and search for something
4. Notice `-noai` is automatically appended to your query
5. AI results should be excluded

## Troubleshooting

**Icons not showing?**

- Ensure `icons/16.png`, `icons/48.png`, and `icons/128.png` exist
- Reload the extension

**Not appending -noai?**

- Check the popup—is it enabled?
- Try an incognito window
- Clear browser cache

**Still seeing AI results?**

- Google's `-noai` flag may not be active on your region
- Try searching with `-noai` manually to verify it works

---

Next steps: customize the icons or submit a PR!
