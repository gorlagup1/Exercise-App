window.$ = window.jQuery = require('jquery'); // eslint-disable-line

export default (function addPlatformClass() {
  const isBrowserOs = {
    windows: () => window.navigator.userAgent.match(/Win/i),
    macOS: () => window.navigator.userAgent.match(/Mac/i),
    unix: () => window.navigator.userAgent.match(/X11/i),
    linux: () => window.navigator.userAgent.match(/Linux/i),
    iOs: () => window.navigator.userAgent.match(/(iPad|iPhone|iPod)/i),
    android: () => window.navigator.userAgent.match(/android/i),
    blackBerry: () => window.navigator.userAgent.match(/BlackBerry/i),
    chrome: () => window.chrome,
    firefox: () => window.navigator.userAgent.match(/Firefox/i),
    ie: () => window.navigator.userAgent.match(/MSIE/i) || window.navigator.userAgent.match(/Trident\/7.0/i), // eslint-disable-line
    opera: () => (!!window.opera || window.navigator.userAgent.indexOf(' OPR/') >= 0),
    seaMonkey: () => window.navigator.userAgent.match(/SeaMonkey/i),
    camino: () => window.navigator.userAgent.match(/Camino/i),
    safari: () => (Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0),
  };

  let htmlClass = '';
  // OS
  if (isBrowserOs.windows()) { htmlClass = 'win'; }
  if (isBrowserOs.unix()) { htmlClass = 'unix'; }
  if (isBrowserOs.macOS()) { htmlClass = 'mac'; }
  if (isBrowserOs.linux()) { htmlClass = 'linux'; }
  if (isBrowserOs.iOs()) { htmlClass = 'ios'; }
  if (isBrowserOs.android()) { htmlClass = 'android'; }
  if (isBrowserOs.blackBerry()) { htmlClass = 'blackberry'; }

  // Browser
  if (isBrowserOs.chrome()) { htmlClass = `${htmlClass} chrome`; }
  if (isBrowserOs.firefox()) { htmlClass = `${htmlClass} firefox`; }
  if (isBrowserOs.ie()) { htmlClass = `${htmlClass} ie`; }
  if (isBrowserOs.opera()) { htmlClass = `${htmlClass} opera`; }
  if (isBrowserOs.seaMonkey()) { htmlClass = `${htmlClass} seamonkey`; }
  if (isBrowserOs.camino()) { htmlClass = `${htmlClass} camino`; }
  if (isBrowserOs.safari()) { htmlClass = `${htmlClass} safari`; }
  return htmlClass;
}());
