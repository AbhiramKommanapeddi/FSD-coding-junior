# AI Chat Extension

A powerful VS Code extension that integrates a React-based web chat interface for AI assistance with contextual workspace awareness and file attachment capabilities.

## 🚀 Features

- **React WebView Chat Interface**: Modern, responsive chat UI built with React
- **AI Integration**: Powered by OpenAI API 
- **File Attachment System**: Support for `@filename` mentions with autocomplete
- **Workspace Context**: Automatically includes current workspace files and content
- **Markdown Support**: Rich text rendering with code syntax highlighting
- **File Search**: Quick file search and attachment functionality
- **Real-time Communication**: Seamless message passing between extension and webview

## 🛠️ Installation

### Development Mode

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Build the extension:
   ```bash
   npm run compile
   ```
4. Press `F5` in VS Code to open Extension Development Host
5. In the new window, the extension will be loaded

### Production Mode

1. Package the extension:
   ```bash
   npm run package
   ```
2. Install the generated `.vsix` file

## ⚙️ Configuration

1. Open VS Code Settings (`Ctrl+,`)
2. Search for "AI Chat Extension"
3. Set your OpenAI API key:
   - `AI Chat Extension: OpenAI API Key`
4. Choose your preferred model:
   - `AI Chat Extension: Model` (gpt-3.5-turbo, gpt-4, gpt-4-turbo)

## 🎯 Usage

### Opening the Chat Interface

- **Command Palette**: `Ctrl+Shift+P` → "AI Chat: Open Chat Interface"
- **Explorer Panel**: Look for "AI Chat Assistant" section
- **Click the chat icon** in the AI Chat Assistant panel

### Chat Features

1. **Send Messages**: Type your questions or requests and press Enter
2. **File Attachments**:
   - Type `@filename` to search and attach files
   - Click the attachment button to browse files
   - Drag and drop files (coming soon)
3. **Code Analysis**: Ask the AI to analyze, refactor, or explain your code
4. **Workspace Context**: The AI automatically understands your project structure

### Sample Prompts

- "Analyze the code in my workspace"
- "Help me refactor this function"
- "Explain what this code does"
- "Create a unit test for this function"
- "Find potential bugs in @filename"
- "Generate documentation for this project"

## 🏗️ Technical Architecture

### Tech Stack

- **Language**: TypeScript
- **Frontend**: React (in WebView)
- **Backend**: Node.js (extension host)
- **AI**: OpenAI API
- **Build**: Webpack bundling
- **Testing**: Mocha

### Project Structure

```
src/
├── extension.ts              # Main extension entry point
├── types/
│   └── index.ts             # TypeScript type definitions
├── services/
│   ├── openai.ts           # OpenAI API integration
│   └── workspace.ts        # Workspace file operations
├── providers/
│   ├── chatProvider.ts     # Tree view provider
│   └── webviewProvider.ts  # WebView panel management
└── webview/
    ├── index.tsx           # React entry point
    ├── ChatUI.tsx          # Main chat component
    └── chat.css            # Chat UI styles
```

### Message Flow

1. **User Input** → WebView (React)
2. **WebView** → Extension Host (via postMessage)
3. **Extension Host** → OpenAI API
4. **OpenAI Response** → Extension Host
5. **Extension Host** → WebView (update UI)

## 🧪 Development

### Available Scripts

- `npm run compile`: Build both extension and webview
- `npm run watch`: Watch mode for development
- `npm run package`: Production build
- `npm run lint`: Code linting
- `npm test`: Run tests

### Building

The project uses webpack with two separate configurations:

1. **Extension Bundle**: Node.js-compatible bundle for the extension host
2. **WebView Bundle**: Web-compatible React bundle for the webview

### Testing

1. Use `F5` to launch Extension Development Host
2. Open the AI Chat interface
3. Test with the sample files in `test-workspace/`

## 📝 API Reference

### Extension Commands

- `ai-chat-extension.openChat`: Open the AI Chat interface
- `ai-chat-extension.attachFile`: Attach file to chat

### Configuration Options

- `aiChatExtension.openaiApiKey`: Your OpenAI API key
- `aiChatExtension.model`: AI model to use

### WebView Messages

The extension uses a custom message protocol for communication between the webview and extension host.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- VS Code Extension API
- React and React DOM
- OpenAI API
- Webpack and TypeScript
- All contributors and testers

---

**Happy Coding! 🎉**
