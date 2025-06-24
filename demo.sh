#!/bin/bash

# AI Chat Extension Demo Script
# This script demonstrates how to test the extension

echo "=== AI Chat Extension Demo ==="
echo ""

echo "1. Building the extension..."
npm run compile

echo ""
echo "2. Extension built successfully! Files created:"
ls -la dist/

echo ""
echo "3. To test the extension:"
echo "   - Press F5 in VS Code to open Extension Development Host"
echo "   - Or use Command Palette: 'Debug: Start Debugging'"
echo "   - A new VS Code window will open with the extension loaded"

echo ""
echo "4. In the new window:"
echo "   - Open Command Palette (Ctrl+Shift+P)"
echo "   - Search for 'AI Chat: Open Chat Interface'"
echo "   - Configure your OpenAI API key in settings"

echo ""
echo "5. Test features:"
echo "   - Send a message to the AI"
echo "   - Try attaching a file using @filename"
echo "   - Ask the AI to analyze your code"

echo ""
echo "6. Sample prompts to try:"
echo "   - 'Analyze the code in my workspace'"
echo "   - 'Help me refactor this function'"
echo "   - 'Explain what this code does'"
echo "   - 'Create a unit test for this function'"

echo ""
echo "Demo files created in test-workspace/ for testing"
echo "Ready to demo! 🚀"
