# Permission Justifications for Chrome Web Store

Copy these justifications into the corresponding fields in the Chrome Web Store developer dashboard.

## 1. Storage Permission Justification

**Permission:** `storage`

**Justification:**
```
The storage permission is used to save your extension toggle state (enabled/disabled) locally on your device. This allows your preference to persist across browser sessions without sending any data to external servers. All data is stored locally using chrome.storage.local and never transmitted anywhere.
```

---

## 2. Scripting Permission Justification

**Permission:** `scripting`

**Justification:**
```
The scripting permission is used to run a content script on Google Search pages. This script intercepts your search queries and appends the "-noai" parameter before they are sent to Google. This allows the extension to exclude AI-generated results from your searches. All processing happens in your browser—no data is sent to external servers.
```

---

## 3. Host Permissions Justification

**Permission:** `*://www.google.com/*`, `*://www.google.fr/*`, etc. (all Google domains)

**Justification:**
```
Host permissions are required to access and modify search queries on Google Search pages across all Google domains (google.com, google.fr, google.co.uk, etc.). The extension needs to run on these pages to detect when you perform a search and append the "-noai" parameter to exclude AI-generated results. No data is collected or sent to external servers—all processing happens locally in your browser.
```

---

## Where to Submit

In the Chrome Web Store Developer Dashboard:

1. Go to **your extension listing**
2. Click **"Edit"** on the extension
3. Scroll to **"Privacy & Security"** section
4. Find fields for:
   - **"Justify use of storage permission"** → Paste **Justification #1**
   - **"Justify use of scripting permission"** → Paste **Justification #2**
   - **"Justify use of host permissions"** → Paste **Justification #3**

5. Fill in all three fields
6. **Save and continue**

---

## Notes

- Be **direct and honest** about why you need permissions
- Google's automated system checks these
- If you don't justify them, your extension may be **rejected or delayed**
- Keep explanations **concise** but clear
- These are straightforward permissions for a legitimate extension, so approval is fast

The justifications above are tailored to your extension and should pass review immediately.
