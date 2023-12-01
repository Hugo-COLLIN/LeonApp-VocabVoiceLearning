export function initRouter() {
  window.onload = function () {
    // Redirect to the specified internal page
    const urlHash = window.location.href.split('#')[1];

    const initialUrl =
      urlHash && checkAppPageExists(urlHash)
        ? urlHash
        : 'series';

    showAppPage(initialUrl);

    // Listen for hash changes
    document.querySelectorAll('a').forEach(function (link) {
      // Only listen for internal links
      if (link.host !== window.location.host || !link.hash.split("#")[1])
        return;

      // Listen for clicks on the links
      link.addEventListener('click', function (event) {
        event.preventDefault();
        history.pushState(null, null, this.href);
        showAppPage(link.href.split('#')[1]);
      });
    });
  };
}

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
}
