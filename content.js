

searchText2 = config;
// console.log(config);
stringArray = searchText2.split(" ");
text = document.querySelectorAll('h1, h2, h3, h4, h5, p, li, td, caption, span, a');

stringArray.forEach((str) => {
regex = new RegExp("(>[^><]*?)(" + str + ")([^><]*?<)", 'gim');
document.body.innerHTML = document.body.innerHTML.replace(regex,
    '$1 <mark style="background-color: black">'+str+'</mark> $3');
});
