# Step-by-Step Testing Guide

## 🚀 Testing Your AI Chat Extension

### Step 1: Open Chat Interface
1. In the Extension Development Host window, press `Ctrl+Shift+P`
2. Type "AI Chat: Open Chat Interface"
3. Press Enter
4. ✅ The chat panel should open on the right side

### Step 2: Configure OpenAI API Key
1. Go to File → Preferences → Settings (or press `Ctrl+,`)
2. Search for "AI Chat Extension"
3. Find "AI Chat Extension: OpenAI API Key"
4. Enter your OpenAI API key
5. Choose your model (gpt-3.5-turbo recommended for testing)
6. ✅ Settings should be saved automatically

### Step 3: Basic Chat Test
1. In the chat interface, type: "Hello! Can you help me analyze code?"
2. Press Enter
3. ✅ You should see a loading indicator
4. ✅ AI should respond with a helpful message

### Step 4: File Attachment Test
1. Type "@" in the chat input
2. You should see file suggestions appear
3. Type "@example" or "@sample" to find test files
4. Select a file from the dropdown
5. Ask: "Analyze this code and suggest improvements"
6. ✅ AI should analyze the attached file content

### Step 5: Workspace Context Test
1. Ask: "What files are in my workspace?"
2. Ask: "Generate documentation for my project"
3. ✅ AI should understand your project structure

## 🔍 Troubleshooting

### If Chat Panel Doesn't Open:
- Check the Console: Help → Toggle Developer Tools
- Look for errors in the Extension Host output panel

### If No AI Response:
- Verify your OpenAI API key is correctly entered
- Check your internet connection
- Look for error messages in the chat interface

### If File Attachment Doesn't Work:
- Make sure you have files in your workspace
- Try typing the full filename after @
- Check the developer console for JavaScript errors

## ✅ Success Criteria

Your extension is working correctly if:
- [ ] Chat panel opens without errors
- [ ] You can send messages and receive AI responses
- [ ] File search works with @ symbol
- [ ] File content is included in AI analysis
- [ ] Markdown and code formatting renders properly
- [ ] Loading states show during AI processing

## 🎉 Demo Ready!

Once all tests pass, your AI Chat Extension is ready for demonstration!
