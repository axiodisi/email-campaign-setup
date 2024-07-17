# Email Sequence Setup

## Setting Up Email Sequences

1. **Open Google Sheet**:
   - Open the Google Sheet you created for email sequences.
   - Ensure it has the following columns:
     - `Email Sequence Name`
     - `Recipient Email`
     - `Signup Date`
     - `Email Interval (days)`
     - `Email Subject`
     - `Email Body (HTML)`

2. **Add Email Sequences**:
   - Manually add email sequences in the sheet or use the form on your website to schedule emails.

## Using the Web Form

1. Open your website.
2. Fill in the form with the sequence details:
   - `Sequence Name`
   - `Recipient Email`
   - `Email Interval (days)`
   - `Email Subject`
   - `Email Body (HTML)`
3. Submit the form to schedule the email.

The scheduled emails will be sent automatically based on the intervals specified in the Google Sheet.

## Troubleshooting

If you encounter any issues, check the following:
- Ensure the Google Sheet ID is correctly specified in the Google Apps Script.
- Verify that the time-driven trigger for the `scheduleEmails` function is set up correctly.

For further assistance, use our custom GPT-powered helpdesk agent.

