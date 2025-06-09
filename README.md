# 🌙 Tsukuyomi

**Tsukuyomi** is a powerful, lightweight browser extension that helps you manage and suspend tabs to drastically reduce memory usage and improve browser performance. Named after the Japanese moon deity, Tsukuyomi brings peaceful sleep to your browser tabs when they're not in use.

## 🎯 What is Tsukuyomi?

Tsukuyomi is a modern browser extension built with React 19 and TypeScript that provides an intuitive interface for managing browser tabs. Unlike automatic tab suspension extensions, Tsukuyomi gives you complete control over which tabs to suspend and when, making it perfect for users who want manual control over their browsing experience.

### The Problem It Solves

Modern browsers can consume enormous amounts of RAM with multiple tabs open. Each tab can use 50-200MB+ of memory, and with dozens of tabs, your system can slow to a crawl. Tsukuyomi solves this by allowing you to manually suspend tabs, reducing their memory footprint while keeping them accessible in your tab bar.

### Why Choose Tsukuyomi?

- **🎛️ Manual Control**: You decide which tabs to suspend, not an algorithm
- **🎨 Beautiful UI**: Clean, intuitive interface with visual feedback
- **🔒 Privacy First**: No data collection, no tracking, works completely offline
- **🌐 Cross-Browser**: Works on Chrome, Firefox, Edge, and other Chromium-based browsers

## Core Functionality

- **📋 Tab Overview**: View all open tabs in a clean, organized interface with favicons and titles
- **💤 Individual Tab Suspension**: Click on any tab to suspend it immediately and free up memory
- **📚 Bulk Suspension**: Hold Shift and click to suspend multiple tabs in a range selection
- **👁️ Visual Feedback**: Suspended tabs are clearly marked with reduced opacity and distinctive styling

## 🚀 Installation

### Option 1: Automated Build (Recommended)

The easiest way to build and install Tsukuyomi is using our automated build script:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/tsukuyomi.git
    cd tsukuyomi
    ```

2. **Run the build script:**

    ```bash
    ./build.sh
    ```

3. **Install in your browser:**
    - Open your browser's extension management page
    - Enable "Developer mode"
    - Click "Load unpacked" and select the `dist` folder

### Option 2: Manual Build

If you prefer to build manually or want to modify the process:

1. **Prerequisites:**

    - [Bun](https://bun.sh/) (recommended) or [Node.js](https://nodejs.org/) 22+
    - Modern browser with extension support

2. **Clone and setup:**

    ```bash
    git clone https://github.com/yourusername/tsukuyomi.git
    cd tsukuyomi
    ```

3. **Install dependencies:**

    ```bash
    bun install
    # or with npm: npm install
    ```

4. **Build the extension:**

    ```bash
    bun run build
    # or with npm: npm run build
    ```

5. **Load in browser:**

    - **Chrome/Chromium**: Navigate to `chrome://extensions/`
    - **Firefox**: Navigate to `about:addons`, then "Debug Add-ons"
    - **Edge**: Navigate to `edge://extensions/`
    - **Other Chromium browsers**: Check their respective extension pages

    Then:

    - Enable "Developer mode" (Chrome/Edge) or "Debug mode" (Firefox)
    - Click "Load unpacked" (Chrome/Edge) or "Load Temporary Add-on" (Firefox)
    - Select the `dist` folder from the project directory

### Browser Compatibility

| Browser | Status          | Notes                  |
| ------- | --------------- | ---------------------- |
| Chrome  | ✅ Full Support | Manifest V3            |
| Firefox | ✅ Full Support | Manifest V3 compatible |
| Edge    | ✅ Full Support | Chromium-based         |
| Safari  | ⚠️ Limited      | Requires conversion    |
| Opera   | ✅ Full Support | Chromium-based         |
| Brave   | ✅ Full Support | Chromium-based         |

### System Requirements

- **Operating System**: Windows 10+, macOS 10.14+, Linux (any modern distribution)
- **Memory**: 4GB RAM minimum (8GB recommended for optimal performance)
- **Browser Version**:
    - Chrome 88+
    - Firefox 109+
    - Edge 88+
- **Node.js/Bun**: Only required for building from source

## 🛠️ Development

### Setting Up Development Environment

1. **Fork and clone the repository:**

    ```bash
    git clone https://github.com/yourusername/tsukuyomi.git
    cd tsukuyomi
    ```

2. **Install dependencies:**

    ```bash
    bun install
    ```

3. **Start development server:**
    ```bash
    bun run dev
    ```

This starts the Vite development server with:

- ⚡ Hot Module Replacement (HMR)
- 🔄 Automatic reload on file changes
- 🎯 Source maps for debugging
- 📊 Real-time build feedback

### Development Workflow

1. **Code Quality**: Always run linting before committing

    ```bash
    bun run lint        # Check for issues
    bun run format      # Auto-format code
    ```

2. **Testing Changes**: Load the `dist` folder in your browser's developer mode

3. **Building**: Create production builds
    ```bash
    bun run build      # Production build
    bun run preview    # Preview production build
    ```

### Development Scripts

| Command           | Description                                 |
| ----------------- | ------------------------------------------- |
| `bun run dev`     | Start development server with hot reloading |
| `bun run build`   | Create production build in `dist/` folder   |
| `bun run lint`    | Run ESLint code quality checks              |
| `bun run format`  | Format code with Prettier                   |
| `bun run preview` | Preview production build locally            |
| `./build.sh`      | Complete build pipeline with validation     |

## 📖 Usage

### Getting Started

1. **Install the extension** following the installation instructions above
2. **Pin the extension** to your browser toolbar for easy access
3. **Click the Tsukuyomi icon** (🌙) to open the tab management interface

### Basic Tab Management

#### Single Tab Suspension

1. Click the Tsukuyomi extension icon
2. Browse the list of all your open tabs
3. Click on any tab entry to suspend it immediately
4. Suspended tabs will appear with reduced opacity
5. To restore, simply click the tab in your browser's tab bar

#### Bulk Tab Suspension

1. Open the Tsukuyomi popup
2. Click on the first tab you want to suspend
3. **Hold Shift** and click on another tab
4. All tabs between the two clicks will be suspended
5. This is perfect for clearing out large ranges of tabs quickly

## 🏗️ Technology Stack

### Frontend Framework

- **React 19** - Latest React with concurrent features and enhanced performance
- **TypeScript 5.8+** - Full type safety and modern JavaScript features
- **JSX/TSX** - Component-based architecture with type checking

### Build Tools & Development

- **Vite 6.3+** - Lightning-fast build tool with HMR
- **SWC** - Rust-based compiler for faster builds
- **ESBuild** - Bundling and minification

### Styling & UI

- **Tailwind CSS 4.x** - Utility-first CSS framework with latest features
- **CSS3** - Modern CSS with custom properties and advanced selectors
- **Responsive Design** - Mobile-first approach with flexible layouts

### Code Quality & Tooling

- **ESLint 9** - Code linting with TypeScript integration
- **Prettier 3.5** - Code formatting with Tailwind plugin
- **TypeScript ESLint** - Enhanced TypeScript linting rules

### Browser Integration

- **Browser Extensions API** - Manifest V3 for modern browsers
- **Chrome APIs** - Tabs API for tab management
- **Cross-browser Support** - Compatible with Chrome, Firefox, Edge

### Package Management & Runtime

- **Bun** - Fast JavaScript runtime and package manager
- **NPM Compatible** - Works with npm/yarn if preferred

## 📁 Project Structure

```
tsukuyomi/
├── 📁 public/                    # Static assets and extension files
│   ├── 📄 manifest.json         # Extension manifest (Manifest V3)
│   ├── 🖼️ icon.png              # Main extension icon (128x128)
│   ├── 🖼️ favicon-48x48.png     # Small favicon for toolbar
│   └── 🖼️ favicon-128x128.png   # Large favicon for store
├── 📁 src/                       # Source code
│   ├── ⚛️ App.tsx               # Main React component with tab logic
│   ├── 🎨 App.css               # Component-specific styles
│   ├── ⚛️ main.tsx              # React entry point and DOM mounting
│   ├── 🎨 index.css             # Global styles and Tailwind imports
│   ├── 📝 vite-env.d.ts         # Vite environment type definitions
│   └── 📁 assets/               # Static assets for the app
│       └── 🖼️ react.svg         # React logo
├── 📁 dist/                      # Built extension (generated)
│   ├── 📄 index.html            # Extension popup HTML
│   ├── 📄 manifest.json         # Copied manifest
│   └── 📁 assets/               # Compiled JS/CSS bundles
├── 🔧 Configuration Files
│   ├── 📄 package.json          # Dependencies and scripts
│   ├── 📄 vite.config.ts        # Vite configuration
│   ├── 📄 tsconfig.json         # TypeScript configuration
│   ├── 📄 tsconfig.app.json     # App-specific TypeScript config
│   ├── 📄 tsconfig.node.json    # Node.js TypeScript config
│   ├── 📄 eslint.config.js      # ESLint configuration
│   ├── 📄 prettier.config.js    # Prettier configuration
│   └── 📄 tailwind.config.js    # Tailwind CSS configuration (auto-gen)
├── 🚀 Build & Deployment
│   ├── 📄 build.sh              # Automated build script
│   └── 📄 bun.lock              # Lockfile for dependencies
├── 📄 index.html                 # Vite entry HTML template
├── 📄 README.md                  # This documentation
└── 📄 LICENSE                    # Project license
```
