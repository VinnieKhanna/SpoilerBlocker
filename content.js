// "content_scripts": [{
//     "js": ["content.js"],
//     "matches": ["http://*/*", "https://*/*"]
//   }]

searchText2 = config;

text = document.querySelectorAll('h1, h2, h3, h4, h5, p, li, td, caption, span, a')
regex = new RegExp(searchText2, 'gi')
for (let i = 0; i < text.length; i++) {
    if (text[i].innerHTML.includes(searchText2)) {
        text[i].innerHTML = text[i].innerHTML.replace(regex, '<mark style="background-color>'+searchText2+'</mark>')
    }
}