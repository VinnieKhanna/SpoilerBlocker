document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('checkPage');
    checkPageButton.addEventListener('click', function() {

      document.body.innerHTML = "BLOCKED!";
      chrome.tabs.executeScript({
        file: 'content.js'
      });

    }, false);
    });