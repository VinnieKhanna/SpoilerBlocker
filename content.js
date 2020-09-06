

var instances = 0;
searchText2 = config;
stringArray = searchText2.split(" ");
text = document.querySelectorAll('h1, h2, h3, h4, h5, p, li, td, caption, span, a');

for (let i = 0; i < stringArray.length; i++) {

    let str = stringArray[i];
regex = new RegExp("(>[^><]*?)(" + str + ")([^><]*?<)", 'gim');

instances += document.body.innerHTML.match(regex).length;


document.body.innerHTML = document.body.innerHTML.replace(regex,
    '$1 <mark style="background-color: black" onclick="this.style.backgroundColor= \'transparent\'">'+str+'</mark> $3');


}

chrome.storage.sync.set({'instance': instances}, () => console.log(instances));

