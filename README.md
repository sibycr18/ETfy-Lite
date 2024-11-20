# ETLAB Survey Auto-Submit Extension

This Chrome extension simplifies form interaction by automatically selecting the first radio button in each group and submitting the form with a single click. 

## Features

- Automatically selects the first radio button in all groups on a webpage.
- Submits the form by clicking the submit button.
- Easy-to-use interface with a single "Submit" button.

## How It Works

When you click the "Submit" button in the extension's popup:
1. The first radio button in each group is selected.
2. The form is automatically submitted by triggering the submit button.

## How to Install

1. Clone or download this repository.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable **Developer mode** using the toggle in the top-right corner.
4. Click on **Load unpacked** and select the downloaded folder.
5. The extension will appear in your browser's toolbar.

## Usage

1. Open a webpage with a form that contains radio buttons.
2. Click the extension's icon in the Chrome toolbar to open the popup.
3. Press the "Submit" button in the popup.
4. The extension will automatically:
   - Select the first radio button in each group.
   - Submit the form.

## Files in the Project

- **manifest.json**: Configures the extension's permissions and behavior.
- **popup.html**: Creates the extension's popup interface.
- **popup.js**: Handles button clicks and injects the script into the current page.
- **content.js**: Contains the logic to select radio buttons and submit the form.
- **icon.png**: (Optional) Icon for the extension.

## Permissions

The extension requires the following permissions:
- **scripting**: To inject the `content.js` script into the active tab.
- **activeTab**: To interact with the currently active tab.

## Limitations

- This extension assumes there is a `button[type="submit"]` on the page to trigger the form submission. If the form submission mechanism differs, it might not work as expected.

## License

This project is open-source and available under the MIT License.

---

Feel free to modify the code to suit your needs!
