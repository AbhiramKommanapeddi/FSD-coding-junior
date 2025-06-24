// Interactive Project Chat - Ask questions about your tasks and get AI responses
const { AITaskManager } = require('./demo.js');
const OpenAIService = require('./openai-config');

class ProjectChat {
    constructor() {
        this.aiTaskManager = new AITaskManager();
        this.openai = new OpenAIService();
        this.chatHistory = [];
    }

    async askQuestion(question) {
        console.log(`\n🤔 Question: ${question}`);
        
        // Add question to chat history
        this.chatHistory.push({ role: 'user', content: question });
        
        try {
            // Get current tasks for context
            const currentTasks = this.aiTaskManager.getTasks();
            const taskContext = currentTasks.length > 0 
                ? `Current tasks: ${currentTasks.map(t => `"${t.description}" (${t.priority}, ${t.completed ? 'completed' : 'pending'})`).join(', ')}`
                : 'No current tasks';

            // Create context-aware prompt
            const contextPrompt = `You are an AI assistant helping with task management. 
            
${taskContext}

User question: ${question}

Please provide a helpful response. If the question is about tasks, be specific about the current task list. If it's about productivity, give actionable advice. Keep responses concise but helpful.`;

            const response = await this.openai.generateText(contextPrompt, { maxTokens: 200 });
            
            console.log(`🤖 AI Response: ${response}`);
            
            // Add response to chat history
            this.chatHistory.push({ role: 'assistant', content: response });
            
            return response;
            
        } catch (error) {
            const fallbackResponse = this.getFallbackResponse(question);
            console.log(`💡 Fallback Response: ${fallbackResponse}`);
            return fallbackResponse;
        }
    }

    getFallbackResponse(question) {
        const q = question.toLowerCase();
        
        if (q.includes('task') || q.includes('todo')) {
            const tasks = this.aiTaskManager.getTasks();
            return `You have ${tasks.length} total tasks. ${tasks.filter(t => !t.completed).length} are pending and ${tasks.filter(t => t.completed).length} are completed.`;
        }
        
        if (q.includes('help') || q.includes('how')) {
            return "I can help you with task management, productivity tips, and project organization. Try asking about your current tasks, productivity suggestions, or how to organize your work better.";
        }
        
        if (q.includes('priority') || q.includes('important')) {
            const highPriorityTasks = this.aiTaskManager.getTasks().filter(t => t.priority === 'high' && !t.completed);
            return `You have ${highPriorityTasks.length} high-priority tasks pending. Focus on completing these first.`;
        }
        
        if (q.includes('progress') || q.includes('status')) {
            const all = this.aiTaskManager.getTasks();
            const completed = all.filter(t => t.completed);
            const rate = all.length > 0 ? (completed.length / all.length * 100).toFixed(1) : 0;
            return `Your completion rate is ${rate}%. You're doing ${rate > 70 ? 'great' : rate > 50 ? 'well' : 'okay, but you can improve'}!`;
        }
        
        return "I can help you with task management and productivity. Try asking about your tasks, priorities, or how to be more productive!";
    }

    async chatSession() {
        console.log('🎉 Welcome to Interactive Project Chat!');
        console.log('=======================================');
        console.log('Ask me questions about your tasks, productivity, or project management.');
        console.log('Type "quit", "exit", or "bye" to end the session.\n');
        
        // Sample questions for demonstration
        const sampleQuestions = [
            "What tasks do I have?",
            "How can I be more productive?",
            "What should I prioritize?",
            "How am I doing with my tasks?",
            "Give me some productivity tips"
        ];
        
        console.log('💡 Sample questions you can ask:');
        sampleQuestions.forEach((q, i) => {
            console.log(`   ${i + 1}. ${q}`);
        });
        
        console.log('\n🤖 Let\'s start chatting! (Note: This is a demo - in a real app, you\'d type questions interactively)');
        
        // Demo with sample questions
        for (const question of sampleQuestions.slice(0, 3)) {
            await this.askQuestion(question);
            await new Promise(resolve => setTimeout(resolve, 1000)); // Pause between questions
        }
        
        console.log('\n✨ Chat session demo completed!');
    }

    getChatHistory() {
        return this.chatHistory;
    }

    clearHistory() {
        this.chatHistory = [];
        console.log('🧹 Chat history cleared!');
    }
}

module.exports = ProjectChat;

// Run if called directly
if (require.main === module) {
    const chat = new ProjectChat();
    chat.chatSession();
}
