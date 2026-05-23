# Jira Jumper

A minimalist Chrome extension to quickly navigate to Jira tickets with just a few keystrokes.

## Features
- **Quick Jump:** Instantly open Jira tickets across multiple prefixes (PGNG, UX, CQTB, CPTR, PRODV2, CRPW).
- **Smart Formatting:** Type just the number (e.g., `123`) and the extension will automatically prepend your selected prefix.
- **Recent History:** Remembers your 3 most recently accessed tickets for one-click access.
- **Persistent Preferences:** Automatically saves your last used prefix for future sessions.

## Installation

### Option 1: From Source (Recommended for Developers)
1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/floodro/jira-jumper.git
   ```
2. Open Google Chrome and navigate to `chrome://extensions/`.
3. Toggle the **Developer mode** switch in the top right corner.
4. Click the **Load unpacked** button in the top left.
5. Select the `jira-jumper` folder you just cloned.

### Option 2: From ZIP Release
1. Download the `jira-jumper.zip` from the [Releases](https://github.com/floodro/jira-jumper/releases) page.
2. Extract the ZIP file to a folder on your computer.
3. Open Google Chrome and navigate to `chrome://extensions/`.
4. Toggle the **Developer mode** switch in the top right corner.
5. Click the **Load unpacked** button and select the extracted folder.

## Usage
1. Click the Jira Jumper icon in your Chrome toolbar.
2. Select your desired ticket prefix from the dropdown (e.g., `PGNG`).
3. Type the ticket number and press **Enter** (or click **Open Ticket**).
4. For previously visited tickets, simply click them under the **RECENT** section!