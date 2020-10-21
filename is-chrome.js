(function () {
  var isChrome =
    /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
  if (isChrome) return;
  var useChromeElement = document.getElementById("use-chrome");
  if (!useChromeElement) {
    useChromeElement = document.createElement("p");
    document.body.prepend(useChromeElement);
  }
  useChromeElement.innerText = "For best results, open this page in Chrome.";
})();
