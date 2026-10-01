/**
 * Popup script: handles toggle state and UI updates
 */

const enabledToggle = document.getElementById('enabledToggle');
const statusElement = document.getElementById('status');

// Use local storage instead of sync (more reliable)
const storageArea = chrome.storage.local;

// Load initial state
storageArea.get({ enabled: true }, (data) => {
  if (chrome.runtime.lastError) {
    console.error('Storage error:', chrome.runtime.lastError);
    return;
  }
  enabledToggle.checked = data.enabled;
  updateStatus(data.enabled);
});

// Listen for toggle changes
enabledToggle.addEventListener('change', (e) => {
  const enabled = e.target.checked;
  storageArea.set({ enabled }, () => {
    if (chrome.runtime.lastError) {
      console.error('Failed to save setting:', chrome.runtime.lastError);
    }
    updateStatus(enabled);
  });
});

function updateStatus(enabled) {
  if (enabled) {
    statusElement.textContent = 'Active';
    statusElement.className = 'status-enabled';
  } else {
    statusElement.textContent = 'Inactive';
    statusElement.className = 'status-disabled';
  }
}
