// AI-Powered Task Analytics
const OpenAIService = require('./openai-config');

class TaskAnalytics {
    constructor() {
        this.openai = new OpenAIService();
    }

    async analyzeProductivity(tasks) {
        const completedTasks = tasks.filter(t => t.completed);
        const pendingTasks = tasks.filter(t => !t.completed);
        
        const analysis = {
            totalTasks: tasks.length,
            completedTasks: completedTasks.length,
            pendingTasks: pendingTasks.length,
            completionRate: tasks.length > 0 ? (completedTasks.length / tasks.length * 100).toFixed(1) : 0
        };

        // AI-powered insights
        const prompt = `Based on this productivity data: ${JSON.stringify(analysis)}, provide 3 actionable insights to improve task completion and productivity. Keep each insight under 50 words.`;
        
        try {
            const insights = await this.openai.generateText(prompt);
            analysis.aiInsights = insights.split('\n').filter(line => line.trim());
        } catch (error) {
            analysis.aiInsights = ['Enable AI insights by configuring your OpenAI API key'];
        }

        return analysis;
    }

    async categorizeTasks(tasks) {
        const taskDescriptions = tasks.map(t => t.description).join(', ');
        const prompt = `Categorize these tasks into categories like Work, Personal, Health, Learning, etc.: ${taskDescriptions}. Return as JSON format: {"Work": ["task1"], "Personal": ["task2"]}`;
        
        try {
            const categorization = await this.openai.generateText(prompt, { maxTokens: 200 });
            return JSON.parse(categorization);
        } catch (error) {
            return { "Uncategorized": tasks.map(t => t.description) };
        }
    }    async suggestPriorities(tasks) {
        const pendingTasks = tasks.filter(t => !t.completed);
        if (pendingTasks.length === 0) {
            return [];
        }

        const taskList = pendingTasks.map(t => t.description).join(', ');
        const prompt = `Rank these tasks by priority (1=highest, 5=lowest) and explain why: ${taskList}. Format: "Task: Priority (reason)"`;
        
        try {
            const priorities = await this.openai.generateText(prompt);
            return priorities.split('\n').filter(line => line.trim());
        } catch (error) {
            return ['Priority suggestions require OpenAI API key configuration'];
        }
    }
}

module.exports = TaskAnalytics;
