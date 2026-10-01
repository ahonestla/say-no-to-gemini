# Say No To Gemini

A lightweight Chrome extension that removes AI-generated content from Google Search results.

## What it does

Automatically appends `-noai` to your Google search queries, excluding Gemini and other AI-generated results from your search results page.

## Installation

### Development (Unpacked)

1. Clone or download this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable **Developer mode** (toggle in top-right)
4. Click **Load unpacked**
5. Select the `no-gemini-extension` folder
6. Done! The extension is now active

### For End Users (Chrome Web Store)

Publish to the Chrome Web Store following [Google's guidelines](https://developer.chrome.com/docs/webstore/publish/).

## Features

- ✅ Automatically applies `-noai` to all Google searches
- ✅ Works on all Google domains (google.com, google.co.uk, etc.)
- ✅ Toggle on/off via extension popup
- ✅ Settings persist across sessions
- ✅ Lightweight (~5KB total)

## Usage

1. Click the extension icon in your toolbar
2. Toggle "Extension Enabled" on/off
3. Your searches will automatically exclude AI results

## Technical Details

- **Manifest v3**: Modern Chrome extension format
- **No external dependencies**: Pure vanilla JavaScript
- **Synced settings**: Uses `chrome.storage.sync` for cross-device settings
- **Content injection**: Intercepts form submissions and URL parameters

## Files

```
no-gemini-extension/
├── manifest.json          # Extension configuration
├── content.js             # Search interception logic
├── background.js          # Service worker
├── popup/
│   ├── popup.html         # Settings UI
│   ├── popup.css          # Styling
│   └── popup.js           # Toggle handler
├── icons/
│   ├── 16.png            # Icon 16x16
│   ├── 48.png            # Icon 48x48
│   └── 128.png           # Icon 128x128
└── README.md             # This file
```

## Troubleshooting

**Not applying -noai to searches?**

- Ensure the extension is enabled in the popup
- Check that you're on a Google search domain
- Try clearing browser cache

**Settings not persisting?**

- Ensure you're signed into a Google account (required for `chrome.storage.sync`)
- Alternatively, modify `content.js` to use `chrome.storage.local`

## Development

To modify the extension:

1. Make your changes
2. Go to `chrome://extensions/`
3. Click the reload icon on the Say No To Gemini card
4. Test in an incognito window for clean state

## License

MIT

## Contributing

Feel free to submit issues and pull requests.

---

**Note**: This extension is not affiliated with Google. The `-noai` flag is a standard Google Search parameter.
