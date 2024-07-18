# Google Apps Script Setup

## Step-by-Step Guide

1. **Create a New Project**:
   - Go to [Google Apps Script](https://script.google.com/) and create a new project.

2. **Copy the Script**:
   - Replace the default code with the following:

```javascript
function doPost(e) {
  var signupSheet = SpreadsheetApp.openById("YOUR_SIGNUP_SPREADSHEET_ID").getSheetByName("User Sign-ups");
  var data = JSON.parse(e.postData.contents);
  
  if (data.email) {
    // Handle user signup
    var signupDate = new Date();
    signupSheet.appendRow([data.email, signupDate]);
    
    return ContentService.createTextOutput(JSON.stringify({ 'status': 'success' })).setMimeType(ContentService.MimeType.JSON);
  } else {
    return ContentService.createTextOutput(JSON.stringify({ 'status': 'error' })).setMimeType(ContentService.MimeType.JSON);
  }
}

function scheduleEmails() {
  var signupSheet = SpreadsheetApp.openById("YOUR_SIGNUP_SPREADSHEET_ID").getSheetByName("User Sign-ups");
  var sequenceSheet = SpreadsheetApp.openById("YOUR_SEQUENCE_SPREADSHEET_ID").getSheetByName("Email Sequences");
  
  var users = signupSheet.getDataRange().getValues();
  var sequences = sequenceSheet.getDataRange().getValues();
  var today = new Date();
  
  for (var i = 1; i < users.length; i++) {
    var userEmail = users[i][0];
    var signupDate = new Date(users[i][1]);
    
    for (var j = 1; j < sequences.length; j++) {
      var firstEmailInterval = parseInt(sequences[j][0]);
      var daysAfterFirstEmail = parseInt(sequences[j][1]);
      var sendDate = new Date(signupDate);
      sendDate.setDate(signupDate.getDate() + firstEmailInterval + daysAfterFirstEmail);
      
      if (sendDate.toDateString() === today.toDateString()) {
        var subject = sequences[j][2];
        var body = sequences[j][3];
        
        MailApp.sendEmail({
          to: userEmail,
          subject: subject,
          htmlBody: body
        });
      }
    }
  }
}

function createTriggers() {
  ScriptApp.newTrigger('scheduleEmails')
    .timeBased()
    .everyDays(1)
    .atHour(9)
    .create();
}
