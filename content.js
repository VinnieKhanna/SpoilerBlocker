// "content_scripts": [{
//     "js": ["content.js"],
//     "matches": ["http://*/*", "https://*/*"]
//   }]

const text = document.querySelectorAll('h1, h2, h3, h4, h5, p, li, td, caption, span, a');

for (let i = 0; i < text.length; i++) {
    if (text[i].includes('Harry Potter')) {
        text[i].innerHTML = text[i].innerHTML.replace('Harry Potter', 'Hairy Potter is very bad');
    }
}

//document.body.innerHTML = ' ';