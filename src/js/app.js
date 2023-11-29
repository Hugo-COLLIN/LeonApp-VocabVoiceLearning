window.onload = function() {
  // Redirect to the specified internal page
  const initialUrl = window.location.href.split('#')[1];
  if (initialUrl)
    showPage(initialUrl);

  document.querySelectorAll('a').forEach(function(link) {
    // console.log(link.hash.split("#")[1])
    if (link.host !== window.location.host || !link.hash.split("#")[1])
      return;

    link.addEventListener('click', function(event) {
      event.preventDefault();
      history.pushState(null, null, this.href);
      showPage(link.href.split('#')[1]);
    });
  });
};

function showPage(url) {
  console.log(url);
  document.querySelectorAll('div').forEach(function(page) {
    page.style.display = 'none';
  });
  document.querySelector('#' + url).style.display = 'block';
}
