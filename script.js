alert("Welcome!");
var j = "";
for(var i = 1; i < location.hash.length; i++) {
  j += location.hash[i]
}
location.href = "https://zerius-learning.w3spaces.com/" + j;