// Static JSON-like data for the company
const companyData = {
    companyName: "TechCorp",
    matchScore: 86,
    accountStatus: "Target"
  };
  
  // Function to create the widget
  function createWidget(data) {
    const widget = document.createElement("div");
    widget.id = "profile-widget";
  
    widget.innerHTML = `
      <div class="widget-inner">
        <div class="widget-header">
          <strong>${data.companyName}</strong>
        </div>
  
        <div class="match-score">
          <label>Match Score: ${data.matchScore}%</label>
          <div class="progress-container">
            <div class="progress-bar" style="width: ${data.matchScore}%"></div>
          </div>
        </div>
  
        <div class="status-container">
          <span class="status-tag ${data.accountStatus === "Target" ? "status-target" : "status-not-target"}">
            ${data.accountStatus}
          </span>
        </div>
  
        <button id="toggle-btn">Hide Widget</button>
      </div>
    `;
  
    document.body.appendChild(widget);
  
    // Add an event listener for the button to hide the widget
    document.getElementById("toggle-btn").addEventListener("click", () => {
      widget.remove();
      chrome.storage.local.set({ widgetVisible: false });
    });
  }
  
  // Check if widget should be displayed, based on chrome storage
  chrome.storage.local.get(["widgetVisible"], (result) => {
    if (result.widgetVisible === false) return;
    createWidget(companyData);
    chrome.storage.local.set({ widgetVisible: true });
  });
  