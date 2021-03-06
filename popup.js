document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('checkPage');
    checkPageButton.addEventListener('click', function() {

      let keyword = document.getElementById("spoilerInputText").value;
      document.getElementById("spoilerInputText").value = '';

      keyword = keyword.replace(/ +(?= )/g,'');

      if (keyword.length < 3) {
        document.getElementById("warnText").innerHTML = "Input too small to parse! Please input size 3 or greater";
      } else {
        document.getElementById("warnText").innerHTML = "Blocked values related to '" + keyword + "'!";

          chrome.tabs.executeScript({code: 'var config = \'' + keyword + '\''}, function(){
          chrome.tabs.executeScript({file: "content.js"}, function() {
             let number = 0;
            chrome.storage.sync.get("instance", (result) => {document.getElementById('num').innerHTML = result.instance;});

          })
        });

      }
    }, false);
    });

