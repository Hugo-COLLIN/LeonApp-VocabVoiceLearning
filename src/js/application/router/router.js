import {checkAppPageExists, showAppPage} from "./managePages.js";

export function initRouter() {
  window.onload = function () {
    // Redirect to the specified internal page
    const urlHash = window.location.href.split('#')[1];

    const initialUrl =
      urlHash && checkAppPageExists(urlHash)
        ? urlHash
        : 'sets';

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

