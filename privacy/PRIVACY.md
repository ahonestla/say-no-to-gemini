# Privacy Policy

**Last Updated:** October 2024

## Overview

Say No To Gemini is committed to protecting your privacy. This extension does **not** collect, store, transmit, or process any personal data beyond what is necessary to function.

## Data Collection

Say No To Gemini does **NOT**:

- Collect any user data
- Track your search queries
- Log browsing history
- Send data to external servers
- Use cookies or tracking technologies
- Store any information about your searches

## How Settings Are Stored

The extension uses **`chrome.storage.local`** to store only:

- Whether the extension is enabled/disabled (toggle state)

This data is stored **locally on your device** and is not transmitted anywhere.

## What the Extension Does

The Say No To Gemini extension:

1. Detects when you perform a Google search
2. Appends the `-noai` parameter to your search query
3. All processing happens **in your browser only**—no server communication

Example:

- Your search: `best restaurants in Paris`
- Modified query: `best restaurants in Paris -noai`

The `-noai` parameter is sent directly to Google's search engine, which is Google's own standard parameter for excluding AI-generated results.

## No Third-Party Services

This extension does **not** use any third-party analytics, tracking services, or external APIs. Everything runs locally in your browser.

## Permissions Explanation

The extension requests the following permissions:

- **`storage`**: To save your on/off toggle state locally
- **`scripting`**: To modify search queries before they're sent to Google
- **Host permissions** (google.com and variants): To access Google search pages

These permissions are used **only** for the stated functionality.

## Google Search

When you search with this extension, your search query is sent to Google as normal (with `-noai` appended). Google's privacy policy applies to how they handle your search query:

- [Google Privacy Policy](https://policies.google.com/privacy)

## Changes to This Policy

We may update this privacy policy occasionally. The "Last Updated" date above indicates when this policy was last modified.

## Contact

For questions about this privacy policy or the extension, please open an issue on the [GitHub repository](https://github.com/ahonestla/say-no-to-gemini).

---

**Summary:** Say No To Gemini does not collect any data. It only stores your toggle preference locally and modifies your Google searches to exclude AI results.
