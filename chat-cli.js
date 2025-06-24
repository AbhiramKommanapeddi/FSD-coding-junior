#!/usr/bin/env node
// Command Line Chat Interface
const ProjectChat = require('./project-chat');

async function runCliChat() {
    const args = process.argv.slice(2);
    
    if (args.length === 0) {
        console.log('🎯 Project Chat CLI');
        console.log('==================');
        console.log('Usage: node chat-cli.js "your question here"');
        console.log('');
        console.log('Examples:');
        console.log('  node chat-cli.js "What tasks do I have?"');
        console.log('  node chat-cli.js "How can I be more productive?"');
        console.log('  node chat-cli.js "What should I prioritize?"');
        console.log('  node chat-cli.js "Give me productivity tips"');
        console.log('');
        console.log('💡 Or run: node quick-question.js for a demo');
        return;
    }
    
    const question = args.join(' ');
    const chat = new ProjectChat();
    
    // Load some sample data
    console.log('🔄 Loading project context...');
    chat.aiTaskManager.addTask('Learn JavaScript advanced concepts', 'high');
    chat.aiTaskManager.addTask('Build portfolio website', 'medium');
    chat.aiTaskManager.addTask('Practice coding challenges', 'high');
    chat.aiTaskManager.addTask('Read tech documentation', 'low');
    chat.aiTaskManager.completeTask(2);
    
    console.log('✅ Context loaded!\n');
    
    await chat.askQuestion(question);
}

if (require.main === module) {
    runCliChat();
}
