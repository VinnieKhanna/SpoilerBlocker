// "content_scripts": [{
//     "js": ["content.js"],
//     "matches": ["http://*/*", "https://*/*"]
//   }]

//const term = "Harry Potter"; // search query we want to highlight in results
//const results; // search results

//text.replace(new RegExp(term, "gi"), (match) => `<mark>${match}</mark>`);

const text = document.querySelectorAll('h1, h2, h3, h4, h5, p, li, td, caption, span, a')

for (let i = 0; i < text.length; i++) {
    if (text[i].innerHTML.includes('Harry Potter')) {
        text[i].innerHTML = text[i].innerHTML.replace('Harry Potter', (match) => '<span style="color: #000000; background-color: #000000">Harry Potter</span>')
    }
}

/*for (let i = 0; i < text.length; i++) {
    if (text[i].innerHTML.includes('Harry Potter')) {
        text[i].innerHTML = text[i].innerHTML.replace('Harry Potter', 'Hairy Potter is very bad')
    }
}*/

//document.body.innerHTML = ' ';