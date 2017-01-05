function getSubscribers() {
  Logger.log("asdf");
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("Sheet1");
  var urls = sheet.getRange('C1:C').getValues(); // the url column
  var newValues = []; // the column to store subscribers
  for (var row = 0; row < urls.length; row++) {
    if (urls[row] !== '') {
      var newV = getSubcriber(urls[row]);
      newValues.push([newV]);
    }
  }
  sheet.getRange('D1:D').setValues(newValues);
}

function getSubscriber(url) {
  var resp = UrlFetchApp.fetch(url);
  var text = resp.getContentText();
  text = text.substring(text.indexOf("\"subscribers\"")+1);
  text = text.substring(0, text.indexOf("</span>"));
  text = text.substring(text.indexOf(">")+1);
  text = text.substring(text.indexOf(">")+1)
  var amount = parseInt(text);
  return amount;
}

function getSubcriberTest() {
  Logger.log(getSubscriber("https://www.reddit.com/r/exponentialage/"));
}
