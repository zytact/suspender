# Suspender

A Chrome extension built with React and TypeScript that allows you to efficiently manage and suspend browser tabs to reduce memory usage and improve performance.

## Features

- **Tab Management**: View all open tabs in a clean, organized interface
- **Individual Tab Suspension**: Click on any tab to suspend it immediately
- **Bulk Suspension**: Hold Shift and click to suspend multiple tabs in a range
- **Visual Feedback**: Suspended tabs are visually distinguished with reduced opacity

## Installation

### From Source

1. Clone the repository:

    ```bash
    git clone <repository-url>
    cd suspender
    ```

2. Install dependencies:

    ```bash
    bun install
    ```

3. Build the extension:

    ```bash
    bun run build
    ```

4. Load the extension in Chrome:
    - Open Chrome and navigate to `chrome://extensions/`
    - Enable "Developer mode" in the top right
    - Click "Load unpacked" and select the `dist` folder

### Development

To run the project in development mode:

```bash
bun run dev
```

This will start the Vite development server with hot reloading.

## Usage

1. Click the Suspender extension icon in your Chrome toolbar
2. A popup will display all your open tabs
3. **Single Tab Suspension**: Click on any tab to suspend it
4. **Multiple Tab Suspension**: Hold Shift and click on another tab to suspend all tabs in the range
5. Suspended tabs will appear with reduced opacity and cannot be clicked again

## Technology Stack

- **Frontend**: React 19 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS 4.x
- **Package Manager**: Bun
- **Chrome APIs**: Chrome Extensions Manifest V3

## Project Structure

```
suspender/
├── public/
│   ├── manifest.json          # Chrome extension manifest
│   ├── icon.png              # Extension icon
│   ├── favicon-48x48.png     # 48x48 favicon
│   └── favicon-128x128.png   # 128x128 favicon
├── src/
│   ├── App.tsx               # Main application component
│   ├── App.css               # Application styles
│   ├── main.tsx              # React entry point
│   └── index.css             # Global styles
├── package.json              # Dependencies and scripts
├── vite.config.ts            # Vite configuration
├── tsconfig.json             # TypeScript configuration
└── README.md                 # This file
```

## Key Components

### App.tsx

The main React component that:

- Fetches all open Chrome tabs using the Chrome API
- Renders the tab list with favicons and titles
- Handles tab suspension logic (single and bulk)
- Manages state for tabs, errors, and user interactions

### Manifest.json

Chrome extension configuration that:

- Defines extension metadata and permissions
- Specifies the popup HTML file
- Declares required Chrome API permissions

## Development Scripts

- `bun run dev` - Start development server
- `bun run build` - Build for production
- `bun run lint` - Run ESLint
- `bun run format` - Format code with Prettier
- `bun run preview` - Preview production build

## Chrome API Permissions

The extension requires the following permissions:

- `tabs` - To access and manipulate browser tabs

## Browser Compatibility

- Chrome (Manifest V3)
- Chromium-based browsers with extension support

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Code Style

This project uses:

- **ESLint** for code linting with TypeScript rules
- **Prettier** for code formatting
- **TypeScript** for type safety

Run `bun run lint` and `bun run format` before committing.

## Troubleshooting

### Extension doesn't load

- Ensure you've built the project with `bun run build`
- Check that the `dist` folder contains the built files
- Verify that Developer mode is enabled in Chrome extensions

### Tabs not suspending

- Check the browser console for Chrome API errors
- Ensure the extension has the necessary `tabs` permission
- Some system tabs cannot be suspended (chrome:// URLs)

## Support

If you encounter any issues or have feature requests, please open an issue on the project repository.
