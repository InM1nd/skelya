function setMainScreenHeight() {
  var addressBarHeight = window.innerHeight - document.documentElement.clientHeight;
  var mainScreen = document.getElementById('hero');
  mainScreen.style.height = "calc(100vh - " + addressBarHeight + "px)";
}

window.onload = setMainScreenHeight;
window.onresize = setMainScreenHeight;