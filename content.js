// "content_scripts": [{
//     "js": ["content.js"],
//     "matches": ["http://*/*", "https://*/*"]
//   }]

const text = document.querySelectorAll('h1, h2, h3, h4, h5, p, li, td, caption, span, a')

/*for (let i = 0; i < text.length; i++) {
    if (text[i].innerHTML.includes('Harry Potter')) {
        text[i].innerHTML = text[i].innerHTML.replace('Harry Potter', 'Hairy Potter is very bad')
    }
}*/
for (let i = 0; i < text.length; i++) {
    if (text[i].innerHTML.includes('Harry Potter')) {
        let innerHTML = text[i].innerHTML;
        let index = innerHTML.indexOf("Harry Potter");
        if (index >= 0) {
            innerHTML = innerHTML.substring(0,index) + "<span class='spoiler'>" + innerHTML.substring(index,index+text.length) + "</span>" + innerHTML.substring(index + text.length);
            text[i].innerHTML = innerHTML;
        }
    }
}

//document.body.innerHTML = ' ';