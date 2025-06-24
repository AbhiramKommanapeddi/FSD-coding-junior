# AI Chat Extension - Usage Guide

## Installation & Setup

1. **Development Mode**: Use F5 to open Extension Development Host
2. **Production**: Package with `npm run package` and install the .vsix file

## Configuration

Set your OpenAI API key in VS Code settings:

1. Open Settings (Ctrl+,)
2. Search for "AI Chat Extension"
3. Enter your OpenAI API key
4. Choose your preferred model (gpt-3.5-turbo, gpt-4, etc.)

## Features

### 1. Chat Interface

- **Command**: `AI Chat: Open Chat Interface`
- **Shortcut**: Use Command Palette (Ctrl+Shift+P)
- **Panel**: Opens in the second view column

### 2. File Attachments

- **@filename**: Type @ followed by filename to search and attach files
- **File Picker**: Button to browse and select files
- **Context Menu**: Right-click files in explorer to attach

### 3. Workspace Integration

- Automatically includes workspace context in AI responses
- File search functionality
- Code analysis and suggestions

### 4. Message Types

- **User Messages**: Your questions and requests
- **AI Responses**: Generated using OpenAI API
- **Error Messages**: Configuration and API errors
- **System Messages**: Loading states and notifications

## Testing Checklist

- [ ] Extension activates without errors
- [ ] Chat panel opens successfully
- [ ] Settings configuration works
- [ ] File search and attachment
- [ ] AI response generation
- [ ] Error handling (no API key, network issues)
- [ ] Markdown and code rendering in chat
- [ ] Workspace context inclusion

## Common Issues

1. **No API Key**: Configure OpenAI API key in settings
2. **Network Errors**: Check internet connection and API key validity
3. **File Access**: Ensure workspace folder is open
4. **Performance**: Large files may take time to process

## Development Notes

- Built with TypeScript, React, and VS Code Extension API
- Uses Webpack for bundling extension and webview code
- OpenAI SDK for API integration
- Markdown-it for message rendering
