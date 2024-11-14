// Listener for extension icon click
chrome.action.onClicked.addListener((tab) => {
  if (tab) {
    // Execute a script in the active tab to get URL, title, and copy to clipboard
    chrome.scripting.executeScript(
      {
        target: { tabId: tab.id },
        func: () => {
          const url = window.location.href;
          const title = document.title;
          const orgModeLink = `[[${url}][${title}]]`;

          // Copy to clipboard
          navigator.clipboard.writeText(orgModeLink)
            .then(() => {
              console.log("Org-mode link copied:", orgModeLink);
            })
            .catch(error => console.error("Failed to copy to clipboard:", error));
        }
      }
    );
  } else {
    console.error("No active tab found.");
  }
});
