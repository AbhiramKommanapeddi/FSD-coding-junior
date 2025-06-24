// Complete AI Demo - All Features
const { AITaskManager } = require('./demo.js');
const TaskAnalytics = require('./task-analytics.js');
const { advancedAIDemo } = require('./advanced-ai-demo.js');

async function completeAIDemo() {
    console.log('🚀 Complete AI-Powered Task Management Demo');
    console.log('='.repeat(60));
    
    try {
        // Initialize AI Task Manager
        const aiTasks = new AITaskManager();
        const analytics = new TaskAnalytics();
        
        // Test connection first
        console.log('\n🔗 Testing OpenAI Connection...');
        const connected = await aiTasks.openai.testConnection();
        
        if (!connected) {
            console.log('\n⚠️  Please configure your OpenAI API key in .env file to see AI features');
            console.log('   Current key:', process.env.OPENAI_API_KEY);
            return;
        }
        
        // Create sample tasks
        console.log('\n📋 Creating Sample Tasks...');
        const sampleTasks = [
            { desc: 'finish project', priority: 'high' },
            { desc: 'exercise', priority: 'medium' },
            { desc: 'read book', priority: 'low' },
            { desc: 'learn JavaScript', priority: 'high' }
        ];
        
        for (const task of sampleTasks) {
            const enhanced = await aiTasks.enhanceTaskDescription(task.desc);
            aiTasks.addTask(enhanced, task.priority);
            console.log(`✅ Added: "${enhanced}"`);
        }
        
        // Complete some tasks
        console.log('\n✅ Completing Some Tasks...');
        aiTasks.completeTask(1);
        aiTasks.completeTask(3);
        
        // Show current tasks
        const allTasks = aiTasks.getTasks();
        console.log('\n📊 Current Tasks:');
        allTasks.forEach(task => {
            const status = task.completed ? '✅' : '⏳';
            console.log(`${status} [${task.priority.toUpperCase()}] ${task.description}`);
        });
        
        // Analytics
        console.log('\n📈 Productivity Analytics:');
        const analysis = await analytics.analyzeProductivity(allTasks);
        console.log(`📊 Total Tasks: ${analysis.totalTasks}`);
        console.log(`✅ Completed: ${analysis.completedTasks}`);
        console.log(`⏳ Pending: ${analysis.pendingTasks}`);
        console.log(`📈 Completion Rate: ${analysis.completionRate}%`);
        
        console.log('\n🤖 AI Insights:');
        analysis.aiInsights.forEach((insight, i) => {
            console.log(`${i + 1}. ${insight}`);
        });
        
        // Task Categorization
        console.log('\n🏷️  Task Categories:');
        const categories = await analytics.categorizeTasks(allTasks);
        Object.entries(categories).forEach(([category, tasks]) => {
            console.log(`📂 ${category}:`);
            tasks.forEach(task => console.log(`   • ${task}`));
        });
        
        // Priority Suggestions
        console.log('\n⭐ Priority Suggestions:');
        const priorities = await analytics.suggestPriorities(allTasks);
        priorities.forEach(priority => {
            console.log(`   ${priority}`);
        });
        
        // Generate new suggestions
        console.log('\n💡 New Task Suggestions (Work Focus):');
        const workSuggestions = await aiTasks.generateTaskSuggestions('professional development and work efficiency');
        workSuggestions.forEach((suggestion, i) => {
            console.log(`${i + 1}. ${suggestion}`);
        });
        
        console.log('\n🎉 Complete AI Demo Finished!');
        console.log('✨ Your AI-powered task management system is ready to use!');
        
    } catch (error) {
        console.error('❌ Demo failed:', error.message);
        console.log('\n💡 Troubleshooting tips:');
        console.log('   • Check your OpenAI API key in .env file');
        console.log('   • Ensure you have internet connection');
        console.log('   • Verify your OpenAI account has API credits');
    }
}

// Export and run
module.exports = { completeAIDemo };

if (require.main === module) {
    completeAIDemo();
}
