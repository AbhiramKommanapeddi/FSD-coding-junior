# 🎯 LIVE TESTING SCRIPT

## 🚀 You're Now Ready to Test!

### **Step 1: Open Chat Interface**
1. In Extension Development Host window, press `Ctrl+Shift+P`
2. Type: "AI Chat: Open Chat Interface"
3. Press Enter
4. ✅ Chat panel should open on the right

### **Step 2: Configure OpenAI**
1. Press `Ctrl+,` to open Settings
2. Search: "AI Chat Extension"
3. Enter your OpenAI API key
4. Choose model: gpt-3.5-turbo (recommended)

### **Step 3: Test Basic Chat**
Type this message:
```
Hello! Can you help me analyze code?
```
✅ Should see loading indicator → AI response

### **Step 4: Test File Attachment**
Type this:
```
@demo.js
```
✅ Should see file picker with demo.js
✅ Select the file
✅ Ask: "Analyze this JavaScript code"

### **Step 5: Test Advanced Features**
Try these prompts:
```
Generate unit tests for the TaskManager class
```
```
What files are in my workspace?
```
```
Suggest improvements for this code
```

## 🎉 SUCCESS INDICATORS

If working correctly, you should see:
- ✅ Chat interface opens smoothly
- ✅ Messages send and receive properly  
- ✅ File search works with @ symbol
- ✅ AI provides intelligent responses
- ✅ Loading states work correctly
- ✅ Markdown renders properly

## 🔍 Troubleshooting

**Chat won't open?**
- Check: Help → Toggle Developer Tools for errors

**No AI response?**
- Check: API key in settings
- Check: Internet connection

**File attachment not working?**
- Check: Workspace folder is open
- Check: Type @demo to find demo.js

---

**🎊 YOUR AI CHAT EXTENSION IS RUNNING! 🎊**
