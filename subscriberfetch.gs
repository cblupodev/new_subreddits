function subs(url) {
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
