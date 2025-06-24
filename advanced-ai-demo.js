// Advanced AI Demo - Extended functionality
const { AITaskManager } = require('./demo.js');

async function advancedAIDemo() {
    console.log('🤖 Advanced AI Features Demo');
    console.log('='.repeat(50));
    
    try {
        const aiTasks = new AITaskManager();
        
        // Test 1: AI Task Suggestions for different contexts
        console.log('\n📝 1. AI Task Suggestions for Different Contexts:');
        
        const contexts = [
            'morning productivity routine',
            'learning JavaScript',
            'healthy lifestyle',
            'career development'
        ];
        
        for (const context of contexts) {
            console.log(`\n🎯 Context: "${context}"`);
            try {
                const suggestions = await aiTasks.generateTaskSuggestions(context);
                suggestions.forEach((task, i) => {
                    console.log(`   ${i + 1}. ${task}`);
                });
            } catch (error) {
                console.log(`   ❌ Error: ${error.message}`);
            }
        }
        
        // Test 2: Task Enhancement Examples
        console.log('\n✨ 2. Task Enhancement Examples:');
        
        const vagueTask = [
            'study',
            'exercise',
            'work on project',
            'clean up'
        ];
        
        for (const task of vagueTask) {
            console.log(`\n📋 Original: "${task}"`);
            try {
                const enhanced = await aiTasks.enhanceTaskDescription(task);
                console.log(`🎨 Enhanced: "${enhanced}"`);
            } catch (error) {
                console.log(`   ❌ Error: ${error.message}`);
            }
        }
        
        // Test 3: Interactive Task Creation
        console.log('\n🎮 3. Interactive Task Creation:');
        const interactiveTask = await createInteractiveTask(aiTasks);
        console.log('Created task:', interactiveTask);
        
    } catch (error) {
        console.error('❌ Advanced demo failed:', error.message);
        console.log('\n💡 Make sure your OpenAI API key is configured in .env file');
    }
}

async function createInteractiveTask(aiTasks) {
    // Simulate user input (in real app, this would come from user interface)
    const userInput = 'I want to learn web development';
    
    console.log(`👤 User input: "${userInput}"`);
    
    // AI suggests specific tasks
    const suggestions = await aiTasks.generateTaskSuggestions(userInput);
    console.log('🤖 AI suggested tasks:');
    suggestions.forEach((task, i) => {
        console.log(`   ${i + 1}. ${task}`);
    });
    
    // Auto-add first suggestion as enhanced task
    if (suggestions.length > 0) {
        const enhanced = await aiTasks.enhanceTaskDescription(suggestions[0]);
        return aiTasks.addTask(enhanced, 'high');
    }
    
    return null;
}

// Export for use
module.exports = { advancedAIDemo };

// Run if called directly
if (require.main === module) {
    advancedAIDemo();
}
