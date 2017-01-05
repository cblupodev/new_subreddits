// I get this error when I run this function "Exceeded maximum execution time"
function getSubscribers() {
  Logger.log("asdf");
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("Sheet1");
  var urls = sheet.getRange('C1:C10').getValues(); // the url column
  var newValues = []; // the column to store subscribers
  for (var row = 0; row < urls.length; row++) {
    
    Logger.log(row);
    if (urls[row] !== '') {
      var newV = getSubscriber(urls[row]);
      newValues.push([newV]);
    }
  }
  sheet.getRange('D1:D10').setValues(newValues);
}

function getSubscriber(url) {
  Logger.log(url);
  try {
    var resp = UrlFetchApp.fetch(url);
    if (resp.getResponseCode() === 200) {
      var text = resp.getContentText();
      text = text.substring(text.indexOf("\"subscribers\"")+1);
      text = text.substring(0, text.indexOf("</span>"));
      text = text.substring(text.indexOf(">")+1);
      text = text.substring(text.indexOf(">")+1)
      var amount = parseInt(text);
      return amount;
    } else {
      return "ERROR";
    }
  } catch (e) {
    Logger.log(e);
  }
  return 0;
}

function getSubcriberTest() {
  Logger.log(getSubscriber("https://www.reddit.com/r/exponentialage/"));
}
