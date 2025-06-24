// OpenAI Configuration Module
require('dotenv').config();
const OpenAI = require('openai');

class OpenAIService {
    constructor() {
        this.validateApiKey();
        this.client = new OpenAI({
            apiKey: process.env.OPENAI_API_KEY,
            organization: process.env.OPENAI_ORG_ID || undefined,
            baseURL: process.env.OPENAI_API_BASE || undefined
        });
    }

    validateApiKey() {
        if (!process.env.OPENAI_API_KEY) {
            throw new Error(
                'OpenAI API key is required. Please set OPENAI_API_KEY in your .env file.'
            );
        }
        
        if (!process.env.OPENAI_API_KEY.startsWith('sk-')) {
            console.warn('Warning: OpenAI API key should start with "sk-"');
        }
    }

    async testConnection() {
        try {
            const response = await this.client.models.list();
            console.log('✅ OpenAI API connection successful!');
            console.log(`Available models: ${response.data.length}`);
            return true;
        } catch (error) {
            console.error('❌ OpenAI API connection failed:', error.message);
            return false;
        }
    }

    async generateChatCompletion(messages, options = {}) {
        try {
            const response = await this.client.chat.completions.create({
                model: options.model || 'gpt-3.5-turbo',
                messages: messages,
                max_tokens: options.maxTokens || 150,
                temperature: options.temperature || 0.7,
                ...options
            });
            
            return response.choices[0].message.content;
        } catch (error) {
            console.error('Error generating chat completion:', error.message);
            throw error;
        }
    }

    async generateText(prompt, options = {}) {
        const messages = [{ role: 'user', content: prompt }];
        return await this.generateChatCompletion(messages, options);
    }
}

module.exports = OpenAIService;
