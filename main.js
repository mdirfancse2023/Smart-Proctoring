let activeTabId;
chrome.action.onClicked.addListener(function (tab) {
  if (tab.url.includes("elitmus.com")) {
    activeTabId = tab.id;
    closeAllTabs();
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ["acess.js"]
    });
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ["fullscreen.js"],
    });
    chrome.action.setBadgeText({
      text: "",
    });
  } else {
    chrome.action.setBadgeText({
      text: "Error",
    });
  }
});
chrome.tabs.onUpdated.addListener(function (tab) {
  if (activeTabId != tab.id) {
    closeAllTabs();
  }
});
const closeAllTabs = () => {
  let querying = chrome.tabs.query({}, function (tabs) {
    for (let tab of tabs) {
      if (tab.id !== activeTabId) chrome.tabs.remove(tab.id);
    }
  });
};
