document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('checkPage');
    checkPageButton.addEventListener('click', function() {
      //console.log(document);
      document.getElementById("newtext").innerHTML = "BLOCKED";
      var searchText = document.getElementById("blocked").value;
      var string = 'var config = \"' + searchText + '\"'
      //console.log(string)
      chrome.tabs.executeScript({
        code: string
    }, function() {
        chrome.tabs.executeScript({file: 'content.js'}, function() {
          document.getElementById("nextext").innerHTML = "Done";
        });
    });

    }, false);
    console.log(document.body);
    console.log(typeof(document.getElementsByTagName("body")[0].innerHTML));
});