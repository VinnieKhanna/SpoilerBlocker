// "content_scripts": [{
//     "js": ["content.js"],
//     "matches": ["http://*/*", "https://*/*"]
//   }]

searchText2 = config;

text = document.querySelectorAll('h1, h2, h3, h4, h5, p, li, td, caption, span, a');
regex = new RegExp("(>[^><]*?)(" + searchText2 + ")([^><]*?<)", 'gim');


document.body.innerHTML = document.body.innerHTML.replace(regex, '$1 <mark style="background-color: black">'+searchText2+'</mark> $3');

