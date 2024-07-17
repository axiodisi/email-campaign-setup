# Google Apps Script Setup

## Step-by-Step Guide

1. **Create a New Project**:
   - Go to [Google Apps Script](https://script.google.com/) and create a new project.

2. **Copy the Script**:
   - Replace the default code with the following:

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.openById("YOUR_SPREADSHEET_ID").getSheetByName("Sheet1");
  var data = JSON.parse(e.postData.contents);
  
  sheet.appendRow([data.name, data.email, new Date()]);
  
  return ContentService.createTextOutput(JSON.stringify({ 'status': 'success' })).setMimeType(ContentService.MimeType.JSON);
}

