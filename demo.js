// Demo JavaScript file for AI Chat Extension testing
const OpenAIService = require('./openai-config');

function greetUser(name) {
    if (!name) {
        return "Hello, anonymous user!";
    }
    return `Hello, ${name}! Welcome to the AI Chat Extension demo.`;
}

class TaskManager {
    constructor() {
        this.tasks = [];
        this.nextId = 1;
    }
    
    addTask(description, priority = 'medium') {
        const task = {
            id: this.nextId++,
            description,
            priority,
            completed: false,
            createdAt: new Date()
        };
        this.tasks.push(task);
        return task;
    }
    
    completeTask(id) {
        const task = this.tasks.find(t => t.id === id);
        if (task) {
            task.completed = true;
            task.completedAt = new Date();
        }
        return task;
    }
    
    getTasks(filter = 'all') {
        switch(filter) {
            case 'completed':
                return this.tasks.filter(t => t.completed);
            case 'pending':
                return this.tasks.filter(t => !t.completed);
            default:
                return this.tasks;
        }
    }
}

// AI-powered task suggestions
class AITaskManager extends TaskManager {
    constructor() {
        super();
        this.openai = new OpenAIService();
    }

    async generateTaskSuggestions(context) {
        try {
            const prompt = `Based on the context: "${context}", suggest 3 productive tasks that someone might want to add to their task list. Return only the task descriptions, one per line.`;
            const suggestions = await this.openai.generateText(prompt);
            return suggestions.split('\n').filter(task => task.trim());
        } catch (error) {
            console.error('Error generating task suggestions:', error.message);
            return ['Review daily goals', 'Check email', 'Plan tomorrow\'s schedule'];
        }
    }

    async enhanceTaskDescription(description) {
        try {
            const prompt = `Enhance this task description to be more specific and actionable: "${description}". Keep it concise but detailed.`;
            return await this.openai.generateText(prompt, { maxTokens: 100 });
        } catch (error) {
            console.error('Error enhancing task description:', error.message);
            return description;
        }
    }
}

// Demo function to test OpenAI integration
async function demonstrateAIFeatures() {
    console.log('🤖 Demonstrating AI-powered features...\n');
    
    try {
        const aiTaskManager = new AITaskManager();
        
        // Test connection
        console.log('Testing OpenAI connection...');
        await aiTaskManager.openai.testConnection();
        
        // Generate task suggestions
        console.log('\n📝 Generating task suggestions for "work productivity"...');
        const suggestions = await aiTaskManager.generateTaskSuggestions('work productivity');
        suggestions.forEach((suggestion, index) => {
            console.log(`${index + 1}. ${suggestion}`);
        });
        
        // Enhance a task description
        console.log('\n✨ Enhancing task description...');
        const enhanced = await aiTaskManager.enhanceTaskDescription('finish project');
        console.log(`Original: "finish project"`);
        console.log(`Enhanced: "${enhanced}"`);
        
    } catch (error) {
        console.error('Demo failed:', error.message);
    }
}

// Export for use in other modules
module.exports = { greetUser, TaskManager, AITaskManager, demonstrateAIFeatures };
