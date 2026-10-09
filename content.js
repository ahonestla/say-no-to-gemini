/**
 * Content script: intercepts Google search form submissions and appends -noai
 */

const DEBUG = false;

function log(...args) {
  if (DEBUG) console.log('[Say No To Gemini]', ...args);
}

function addNoAiToQuery(query) {
  if (!query || typeof query !== 'string') return query;
  if (query.includes('-noai')) return query;
  return query.trim() + ' -noai';
}

// Check if extension is enabled (default: true)
chrome.storage.local.get({ enabled: true }, (data) => {
  if (chrome.runtime.lastError) {
    log('Storage error:', chrome.runtime.lastError);
    return;
  }
  
  const enabled = data.enabled;
  log('Extension loaded. Enabled:', enabled);
  
  if (!enabled) {
    log('Extension disabled, skipping');
    return;
  }

  // ======================
  // 1. Form submission handler
  // ======================
  document.addEventListener(
    'submit',
    (e) => {
      const form = e.target;
      if (!form.action || !form.action.includes('google.')) {
        return;
      }

      const input = form.querySelector('input[name="q"]');
      if (!input) {
        log('No search input found in form');
        return;
      }

      const originalQuery = input.value;
      const newQuery = addNoAiToQuery(originalQuery);
      
      if (newQuery !== originalQuery) {
        input.value = newQuery;
        log('Form submission: appended -noai', originalQuery, '->', newQuery);
      } else {
        log('Form submission: -noai already present or empty');
      }
    },
    true
  );

  // ======================
  // 2. URL parameter handler (for direct navigation)
  // ======================
  const params = new URLSearchParams(window.location.search);
  const urlQuery = params.get('q');

  if (urlQuery) {
    const newQuery = addNoAiToQuery(urlQuery);
    if (newQuery !== urlQuery) {
      // Check if we've already processed this query (prevent infinite reload)
      const alreadyProcessed = sessionStorage.getItem('noai_processed_' + urlQuery);
      if (alreadyProcessed) {
        log('Already processed this query, skipping reload');
        return;
      }

      // Mark this query as processed
      sessionStorage.setItem('noai_processed_' + urlQuery, 'true');

      params.set('q', newQuery);
      const newUrl = window.location.pathname + '?' + params.toString();
      const originalUrl = window.location.pathname + '?' + new URLSearchParams(window.location.search).toString();
      
      log('URL detected: appending -noai and reloading', urlQuery, '->', newQuery);
      
      // Reload with -noai parameter
      window.location.href = window.location.origin + newUrl;
      return; // Stop further execution
    }
  }



  // ======================
  // 4. Monitor for AJAX/fetch calls (Google Instant)
  // ======================
  const originalFetch = window.fetch;
  window.fetch = function(...args) {
    const url = args[0];
    const options = args[1] || {};
    
    if (typeof url === 'string' && url.includes('google.') && url.includes('/search')) {
      const urlObj = new URL(url, window.location.origin);
      const q = urlObj.searchParams.get('q');
      
      if (q && !q.includes('-noai')) {
        urlObj.searchParams.set('q', addNoAiToQuery(q));
        args[0] = urlObj.toString();
        log('Fetch intercepted and modified:', q, '->', urlObj.searchParams.get('q'));
      }
    }
    
    return originalFetch.apply(this, args);
  };

  // ======================
  // 5. Monitor input changes (for auto-suggestions)
  // ======================
  document.addEventListener('change', (e) => {
    if (e.target.name === 'q') {
      const input = e.target;
      const originalQuery = input.value;
      const newQuery = addNoAiToQuery(originalQuery);
      
      if (newQuery !== originalQuery) {
        input.value = newQuery;
        log('Input changed: appended -noai');
      }
    }
  });

  log('All handlers installed');
});