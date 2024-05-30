if(!localStorage.KZGITSETTINGS) {
  localStorage.KZGITSETTINGS = "{\"mode\": 0, \"selfredirect\": true, \"experimentals\": false}";
}
const controls = JSON.parse(localStorage.KZGITSETTINGS);
if(typeof controls.selfredirect != "boolean") {
  controls.selfredirect = true
}
if(typeof controls.experimentals != "boolean") {
  controls.experimentals = false
}
switch (controls.mode) {
  case 1:
    document.body.setAttribute("Dark-Mode", "");
  break;
  case 0:
    document.body.setAttribute("Light-Mode", "");
  break;
  case 2:
    document.body.setAttribute("Minimal-Style", "")
}
if(controls.experimentals) {
  document.body.setAttribute("experimental-stuff", "");
}
