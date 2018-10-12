(function (doc, win) {
var docEle = doc.documentElement,
resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
recalc = function () {
var clientWidth = docEle.clientWidth;
var scale = clientWidth / 1080;
docEle.style.fontSize = 100 * scale + 'px';
};
win.addEventListener(resizeEvt, recalc, false);
doc.addEventListener('DOMContentLoaded', recalc, false);
}(document, window));
