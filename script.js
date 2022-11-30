alert("Welcome!");
var a = document.getElementById("a");
var j = "";
if(location.hash != "" && location.hash[1] == "/") {
  for(var i = 2; i < location.hash.length; i++) {
    j += location.hash[i];
  }
}
a.href = "https://zerius-learning.w3spaces.com/" + j;
