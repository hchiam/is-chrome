(function () {
  if (isChrome()) return;
  createOrSetMessageToUseChrome();

  function isChrome() {
    // based on https://stackoverflow.com/questions/4565112/javascript-how-to-find-out-if-the-user-browser-is-chrome/13348618#13348618
    var winNav = window.navigator;
    var isIOSChrome = winNav.userAgent.match("CriOS");
    if (isIOSChrome) return true;

    var isChromium = window.chrome;
    var vendorName = winNav.vendor;
    var isIEEdge = winNav.userAgent.indexOf("Edge") > -1;
    var isOpera = typeof window.opr !== "undefined";
    var isGoogleChrome =
      isChromium !== null &&
      typeof isChromium !== "undefined" &&
      vendorName === "Google Inc." &&
      isIEEdge === false &&
      isOpera === false;

    if (isGoogleChrome) return true;

    return false;
  }

  function createOrSetMessageToUseChrome() {
    var useChromeElement = document.getElementById("use-chrome");
    if (!useChromeElement) {
      useChromeElement = document.createElement("p");
      document.body.prepend(useChromeElement);
    }
    useChromeElement.innerText = "For best results, open this page in Chrome.";
  }
})();
