function g(el) { return document.getElementById(el); }
g("modalExample").onclick = g("hide").onclick = g("hideT").onclick = function () {
    g("modalExample").style.display = "none";
    g("modal-wrapper").style.display = "none";
}
g("shown").onclick = function () {
    g("modalExample").style.display = "block";
    g("modal-wrapper").style.display = "block";
}

var a = false;
var oDiv = g("modal-wrapper");
var myDiv = g("modal-header");
myDiv.onmousedown=function(ev){
    var disX=ev.clientX-oDiv.offsetLeft
    var disY=ev.clientY-oDiv.offsetTop

    document.onmousemove=function(ev){
      var l=ev.clientX-disX
      var t=ev.clientY-disY

      oDiv.style.left=l+'px'
      oDiv.style.top=t+'px'
    }
    document.onmouseup=function(){
      document.onmousemove=null;
      document.onmouseup=null
    }
  }
function resizable() {
 oTop = g("modal-wrapper"),  oLine = g("line"),oLinet = g("linet");
 
 oLine.onmousedown = function(e) {
 var disX = (e || event).clientX;
 oLine.left = oLine.offsetLeft;
 document.onmousemove = function(e) { 
  var iT = oLine.left + ((e || event).clientX - disX);
 var e=e||window.event,tarnameb=e.target||e.srcElement;
 oLine.style.margin = 0;
  iT < 320 && (iT = 320);
  oLine.style.left = oTop.style.width = iT + "px";
  return false
 }; 
 document.onmouseup = function() {
  document.onmousemove = null;
  document.onmouseup = null; 
  oLine.releaseCapture && oLine.releaseCapture()
 };
 oLine.setCapture && oLine.setCapture();
 return false
 };
 oLinet.onmousedown = function(e) {
 var disY = (e || event).clientY;
 oLinet.top = oLinet.offsetTop;
 document.onmousemove = function(e) { 
  var hT = oLinet.top + ((e || event).clientY - disY);
 var e=e||window.event,tarnameb=e.target||e.srcElement;
 oLinet.style.margin = 0;
  hT < 280 && (hT = 280);
  oLinet.style.top = oTop.style.height = hT + "px";
  return false
 }; 
 document.onmouseup = function() {
  document.onmousemove = null;
  document.onmouseup = null; 
  oLinet.releaseCapture && oLinet.releaseCapture()
 };
 oLinet.setCapture && oLinet.setCapture();
 return false
 };
};
function autoCenter(el) {
    var bodyW = document.documentElement.clientWidth;
    var bodyH = document.documentElement.clientHeight;

    var elW = el.offsetWidth;
    var elH = el.offsetHeight;

    el.style.left = (bodyW - elW) / 2 + "px";
    el.style.top = (bodyH - elH) / 2 + "px";
}
//函数: 自动全屏
function fillToBody(el) {
    el.style.width = document.documentElement.clientWidth + "px";
    el.style.height = document.documentElement.clientHeight + "px";
}
window.onload = window.onresize = function () {
    
    resizable();
	autoCenter(g("modal-wrapper"));
    fillToBody(g("modalExample"));
}

