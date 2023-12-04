/**
 * Check if the page exists in the app
 * @param hash
 * @returns {Element}
 */
export function checkAppPageExists(hash) {
  return document.querySelector('#' + hash);
}

/**
 * Display the app page
 * @param pageId - The page to display
 */
export function showAppPage(pageId) {
  const page = checkAppPageExists(pageId);
  if (!page) return;
  document.querySelectorAll('main > div').forEach(function (page) {
    page.style.display = 'none';
  });
  page.style.display = 'block';
  page.dispatchEvent(new Event('show'));
}