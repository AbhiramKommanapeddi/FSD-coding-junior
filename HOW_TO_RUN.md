# 🚀 **COMPLETE GUIDE: How to Run Your AI Chat Extension**

## **🎯 RECOMMENDED METHOD: Extension Development Host**

### **📋 Prerequisites:**

1. ✅ VS Code installed
2. ✅ Node.js installed (v20+)
3. ✅ OpenAI API key ready

### **🔧 Step-by-Step Instructions:**

#### **1. Open Your Project**

```bash
# Navigate to your project
cd "c:\Users\abhik\Downloads\FSD coding junior"

# Open in VS Code
code .
```

#### **2. Build the Extension**

```bash
# Install dependencies (if not done)
npm install

# Build the extension
npm run compile
```

#### **3. Launch Extension Development Host**

- **Press `F5`** in VS Code
- OR go to **Run → Start Debugging**
- OR use Command Palette: **Debug: Start Debugging**

#### **4. Set Up Demo Workspace**

1. **New VS Code window will open** (Extension Development Host)
2. **File → Open Folder**
3. **Navigate to**: `c:\Users\abhik\Downloads\FSD coding junior\demo-workspace`
4. **Select Folder**

#### **5. Open AI Chat Interface**

1. **Press `Ctrl+Shift+P`**
2. **Type**: "AI Chat: Open Chat Interface"
3. **Press Enter**
4. ✅ **Chat panel opens on the right**

#### **6. Configure OpenAI**

1. **Press `Ctrl+,`** (Settings)
2. **Search**: "AI Chat Extension"
3. **Enter your OpenAI API key**
4. **Choose model**: gpt-3.5-turbo

#### **7. Test Your Extension**

##### **Basic Chat Test:**

```
Hello! Can you help me analyze code?
```

✅ Should see loading → AI response

##### **File Attachment Test:**

```
@demo.js
```

✅ Should see file picker → Select demo.js → Ask: "Analyze this code"

##### **Advanced Features:**

```
Generate unit tests for the TaskManager class
```

```
What files are in my workspace?
```

```
Suggest improvements for this code
```

## **🎯 Alternative Methods**

### **Method 2: Use Keyboard Shortcuts**

- **Ctrl+F5**: Run without debugging
- **F5**: Run with debugging (recommended)

### **Method 3: Debug Menu**

1. **Run → Start Debugging**
2. **Select "Run Extension"**

### **Method 4: Command Palette**

1. **Ctrl+Shift+P**
2. **"Debug: Start Debugging"**

## **🔍 Troubleshooting**

### **Extension Won't Launch?**

- ✅ Check terminal for build errors
- ✅ Run `npm run compile` first
- ✅ Ensure VS Code is in the project folder

### **Chat Panel Won't Open?**

- ✅ Check: Help → Toggle Developer Tools
- ✅ Look for errors in console
- ✅ Verify extension loaded in Extensions view

### **No AI Response?**

- ✅ Configure OpenAI API key in settings
- ✅ Check internet connection
- ✅ Verify API key is valid

### **File Attachment Not Working?**

- ✅ Open a workspace folder first
- ✅ Type `@demo` to find demo.js
- ✅ Check developer console for errors

## **📊 Success Indicators**

You'll know it's working when:

- ✅ **Extension Development Host opens** (new VS Code window)
- ✅ **Chat panel appears** on the right side
- ✅ **Loading indicators** show during AI processing
- ✅ **File search works** when typing @filename
- ✅ **AI provides intelligent responses** with proper formatting
- ✅ **Markdown renders correctly** in chat messages

## **🎬 Demo Script**

For demonstration purposes, follow this sequence:

1. **"Hello! I'm testing my AI chat extension"**
2. **"@demo.js"** → Select file
3. **"Analyze this JavaScript code and suggest improvements"**
4. **"Generate unit tests for the TaskManager class"**
5. **"What design patterns are used in this code?"**

## **📱 Quick Commands Reference**

| Action           | Command                                         |
| ---------------- | ----------------------------------------------- |
| Launch Extension | `F5`                                            |
| Open Chat        | `Ctrl+Shift+P` → "AI Chat: Open Chat Interface" |
| Settings         | `Ctrl+,`                                        |
| Command Palette  | `Ctrl+Shift+P`                                  |
| Developer Tools  | `Help → Toggle Developer Tools`                 |

---

## **🎉 You're Ready to Demo!**

Your AI Chat Extension is fully functional with:

- ✅ **React-based chat interface**
- ✅ **OpenAI integration**
- ✅ **File attachment system**
- ✅ **Workspace context awareness**
- ✅ **Professional UI/UX**

**Press F5 and start testing your amazing AI Chat Extension! 🚀**
