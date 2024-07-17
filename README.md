# Email Campaign Setup Guide

Welcome to the Email Campaign Setup Guide. Follow these steps to set up your email campaign website and automate email collection and sending.

## Step 1: Setting Up GitHub Pages

1. Create a GitHub account if you don't have one.
2. Create a new repository named `your-repo-name`.
3. Upload the contents of this package to your repository.
4. Go to the repository settings and enable GitHub Pages from the `main` branch.

For detailed instructions, see `setup/github_setup.md`.

## Step 2: Configuring Google Apps Script

1. Open Google Apps Script and create a new project.
2. Copy the code from the file `setup/google_apps_script_setup.md`.
3. Deploy the script as a web app and get the deployment URL.
4. Update `script.js` with your deployment URL.
5. Create a time-driven trigger for the `scheduleEmails` function to run daily.

For detailed instructions, see `setup/google_apps_script_setup.md`.

## Step 3: Customizing Your Site

1. Edit `index.html`, `style.css`, and `script.js` to customize your site.
2. Follow the instructions in `setup/customize_site.md` for more details.

## Step 4: Setting Up Email Sequences

1. Open the Google Sheet linked to your Google Apps Script.
2. Add email sequences directly in the sheet or use the form on your website.

For detailed instructions, see `setup/email_sequence_setup.md`.

## Getting Help

For any questions or troubleshooting, you can use our custom GPT-powered helpdesk agent. It can guide you through the setup process, help with troubleshooting, and answer any questions you might have.

### Happy Building!
