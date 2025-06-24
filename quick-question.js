// Quick Question Tool - Ask specific questions about your project
const ProjectChat = require('./project-chat');

async function askQuickQuestion(question) {
    const chat = new ProjectChat();
    
    // Add some sample tasks for context
    chat.aiTaskManager.addTask('Complete project documentation', 'high');
    chat.aiTaskManager.addTask('Review code quality', 'medium');
    chat.aiTaskManager.addTask('Update README file', 'low');
    chat.aiTaskManager.addTask('Prepare presentation', 'high');
    
    // Complete some tasks to show progress
    chat.aiTaskManager.completeTask(1);
    chat.aiTaskManager.completeTask(3);
    
    console.log('🎯 Quick Question Tool');
    console.log('=====================');
    console.log('Sample project context loaded...\n');
    
    return await chat.askQuestion(question);
}

// Example usage with different types of questions
async function demoQuestions() {
    const questions = [
        "What's my current task status?",
        "Which tasks should I prioritize?",
        "How can I improve my productivity?",
        "Am I making good progress?",
        "What should I work on next?"
    ];
    
    console.log('🎪 Demo: Different Types of Questions You Can Ask');
    console.log('================================================\n');
    
    for (let i = 0; i < questions.length; i++) {
        console.log(`\n--- Question ${i + 1} ---`);
        await askQuickQuestion(questions[i]);
        
        if (i < questions.length - 1) {
            console.log('\n' + '─'.repeat(50));
        }
    }
}

module.exports = { askQuickQuestion, demoQuestions };

// Run demo if called directly
if (require.main === module) {
    demoQuestions();
}
