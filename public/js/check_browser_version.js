var userAgent = navigator.userAgent;
var isChrome = /Chrome/.test(userAgent) && /Google Inc/.test(navigator.vendor);
var chromeVersion;

if (isChrome) {
  var raw = userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
  chromeVersion = raw ? parseInt(raw[2], 10) : false;

  if (chromeVersion < 56) {
    showUnsupportedVersionMsg();
  } else {
    showMainPage();
  }
} else {
  showUnsupportedBrowserMsg();
}

function showMainPage() {
  var tmpl = document.getElementById('supported');
  document.body.innerHTML = tmpl.innerHTML;
}

function showUnsupportedVersionMsg() {
  var tmpl = document.getElementById('unspportedVersionMsg');
  document.body.innerHTML = tmpl.innerHTML; 
}

function showUnsupportedBrowserMsg() {
  var tmpl = document.getElementById('unspportedBrowserVersion');
  document.body.innerHTML = tmpl.innerHTML;
}


