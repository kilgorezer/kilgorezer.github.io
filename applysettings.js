if(!localStorage.KZGITSETTINGS) {
  localStorage.KZGITSETTINGS = "{}";
}
const controls = JSON.stringify(localStorage.KZGITSETTINGS);
if(!controls.mode) {
  controls.mode = 0;
}
if(typeof controls.selfredirect != "boolean") {
  controls.selfredirect = false
}
if(controls.mode=1) {
  document.body.setAttribute("DarkMode", "");
}else if (controls.mode=0){
  document.body.setAttribute("LightMode", "");
}