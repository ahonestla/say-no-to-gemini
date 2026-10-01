/**
 * Background service worker: handles extension initialization
 */

chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === 'install') {
    // Set default values
    chrome.storage.local.set({
      enabled: true,
    });
  }
});
