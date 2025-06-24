// Test file to demonstrate the demo functionality
const { greetUser, TaskManager, AITaskManager, demonstrateAIFeatures } = require('./demo.js');

console.log('🎉 Welcome to the Demo Test!');
console.log('='.repeat(50));

// Test basic greeting
console.log('\n1. Testing greetUser function:');
console.log(greetUser());
console.log(greetUser('Abhik'));

// Test TaskManager
console.log('\n2. Testing TaskManager:');
const taskManager = new TaskManager();
const task1 = taskManager.addTask('Learn JavaScript', 'high');
const task2 = taskManager.addTask('Build a demo project', 'medium');

console.log('Added tasks:', taskManager.getTasks());

taskManager.completeTask(task1.id);
console.log('After completing first task:', taskManager.getTasks());

// Test AI features (only if API key is configured)
console.log('\n3. Testing AI Features:');
if (process.env.OPENAI_API_KEY && process.env.OPENAI_API_KEY !== 'your_openai_api_key_here') {
    console.log('OpenAI API key found, testing AI features...');
    demonstrateAIFeatures().catch(err => {
        console.error('AI features test failed:', err.message);
    });
} else {
    console.log('⚠️  OpenAI API key not configured. Please update your .env file to test AI features.');
    console.log('   Current API key:', process.env.OPENAI_API_KEY);
}

console.log('\n✅ Demo test completed!');
