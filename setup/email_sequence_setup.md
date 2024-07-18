# Email Sequence Setup

## Setting Up Email Sequences

1. **Open Google Sheet**:
   - Open the Google Sheet you created for email sequences.
   - Ensure it has the following columns:
     - `First Email Interval`
     - `Days After First Email`
     - `Email Subject`
     - `Email Body (HTML)`

2. **Add Email Sequences**:
   - Manually add email sequences in the sheet.

### Example:

| First Email Interval | Days After First Email | Email Subject          | Email Body (HTML)                    |
|----------------------|------------------------|------------------------|--------------------------------------|
| 0                    | 0                      | Welcome to our service | Welcome! Thank you for joining us.   |
| 0                    | 3                      | Next Steps             | Here are the next steps.             |
| 0                    | 7                      | How to Get Started     | Let's get started with our service.  |

## Managing Email Sequences

1. Open your Google Sheet.
2. Add email sequences directly in the sheet with the desired intervals and email content.

The scheduled emails will be sent automatically based on the intervals specified in the Google Sheet.

## Troubleshooting

If you encounter any issues, check the following:
- Ensure the Google Sheet ID is correctly specified in the Google Apps Script.
- Verify that the time-driven trigger for the `scheduleEmails` function is set up correctly.

For further assistance, use our custom GPT-powered helpdesk agent.
