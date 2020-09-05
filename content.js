// "content_scripts": [{
//     "js": ["content.js"],
//     "matches": ["http://*/*", "https://*/*"]
//   }]

const text = document.querySelectorAll('h1, h2, h3, h4, h5, p, li, td, caption, span, a')

//Replaces text
for (let i = 0; i < text.length; i++) {
    if (text[i].innerHTML.includes(config)) {
        text[i].innerHTML = text[i].innerHTML.replace('[REDACTED]')
    }
}

//Highlights text
/*for (let i = 0; i < text.length; i++) {
    if (text[i].innerHTML.includes('Harry Potter')) {
        text[i].innerHTML = text[i].innerHTML.replace('Harry Potter', (match) => '<span style="color: #000000; background-color: #000000">Harry Potter</span>')
    }
}*/
