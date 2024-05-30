alert("Welcome!");
var redirect = controls.selfredirect?"https://kilgorezer.github.io/":"https://zerius-learning.w3spaces.com/";
var snumber = NaN;
var a = document.getElementById("a");
var j = "";
var settings = null;
if(location.hash != "" && location.hash[1] == "/") {
  for(var i = 2; i < location.hash.length; i++) {
    j += location.hash[i];
  }
}
a.href = redirect + j;

var applySettings(popup) {
  window.settings = popup;
  window.snumber = 0;
  setInterval(function(){
    if(settings.changed > snumber) {
      snumber = settings.changed;
      applySettings();
    }
  }, 1500);
}
