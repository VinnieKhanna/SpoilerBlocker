// "content_scripts": [{
//     "js": ["content.js"],
//     "matches": ["http://*/*", "https://*/*"]
//   }]

const elements = document.getElementsByTagName('*');

for (let i = 0; i < elements.length; i++) {
    let element = elements[i];

    for (let j = 0; j < element.childNodes.length; j++) {
        let node = element.childNodes[j];

        if (node.nodeType === 3) {
            let text = node.nodeValue;
            let replacedText = text.replace(/[word or phrase to replace here]/gi, '[new word or phrase]');

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}

//document.body.innerHTML = ' ';