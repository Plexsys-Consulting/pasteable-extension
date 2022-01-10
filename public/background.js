//Trigger reactJS bundle to run in the active tab context
chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ['BUNDLE_JS_PATH']
    });
});