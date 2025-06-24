// Offline Demo - Works without OpenAI API key
const { greetUser, TaskManager } = require('./demo.js');

console.log('🎉 Offline Demo - No API Key Required');
console.log('=====================================\n');

// Test greeting
console.log('1. 👋 Greeting Function:');
console.log('   ' + greetUser());
console.log('   ' + greetUser('Abhik'));

// Test task manager
console.log('\n2. 📋 Task Manager:');
const taskManager = new TaskManager();

// Add some tasks
const tasks = [
    { desc: 'Learn JavaScript fundamentals', priority: 'high' },
    { desc: 'Build a todo app', priority: 'medium' },
    { desc: 'Practice coding daily', priority: 'high' },
    { desc: 'Read tech articles', priority: 'low' }
];

console.log('   Adding tasks...');
tasks.forEach(task => {
    const addedTask = taskManager.addTask(task.desc, task.priority);
    console.log(`   ✅ Added: "${addedTask.description}" [${addedTask.priority}]`);
});

// Complete some tasks
console.log('\n   Completing tasks...');
taskManager.completeTask(1);
taskManager.completeTask(3);
console.log('   ✅ Completed tasks 1 and 3');

// Show statistics
const allTasks = taskManager.getTasks();
const completed = taskManager.getTasks('completed');
const pending = taskManager.getTasks('pending');

console.log('\n3. 📊 Task Statistics:');
console.log(`   📝 Total tasks: ${allTasks.length}`);
console.log(`   ✅ Completed: ${completed.length}`);
console.log(`   ⏳ Pending: ${pending.length}`);
console.log(`   📈 Completion rate: ${(completed.length / allTasks.length * 100).toFixed(1)}%`);

// Show task details
console.log('\n4. 📋 Task Details:');
allTasks.forEach(task => {
    const status = task.completed ? '✅' : '⏳';
    const priority = task.priority.toUpperCase().padEnd(6);
    console.log(`   ${status} [${priority}] ${task.description}`);
});

console.log('\n🎯 Summary:');
console.log('   ✅ Basic task management working perfectly!');
console.log('   ✅ All core functions operational');
console.log('   🔑 Ready for AI features once API key is added');

console.log('\n💡 Next Steps:');
console.log('   1. Get OpenAI API key from: https://platform.openai.com/api-keys');
console.log('   2. Add key to .env file');
console.log('   3. Run: npm run demo:complete');

console.log('\n🚀 Your task management system is ready!');
