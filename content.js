// "content_scripts": [{
//     "js": ["content.js"],
//     "matches": ["http://*/*", "https://*/*"]
//   }]

searchText2 = config;
regex = new RegExp(searchText2, 'gi');
console.log(document.querySelectorAll);
document.getElementById("body").innerHTML.replace(regex, '<mark>' + searchText2 + '</mark>');
//document.body.innerHTML = ' ';