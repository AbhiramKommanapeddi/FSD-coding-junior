// Test environment variable loading
require('dotenv').config();

console.log('🔍 Environment Variable Test');
console.log('============================');
console.log('API Key from .env:', process.env.OPENAI_API_KEY);
console.log('API Key length:', process.env.OPENAI_API_KEY?.length);
console.log('Starts with sk-:', process.env.OPENAI_API_KEY?.startsWith('sk-'));
console.log('');

// Test if the key works
const OpenAI = require('openai');

try {
    const client = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
    });
    
    console.log('🧪 Testing API key...');
    client.models.list()
        .then(() => {
            console.log('✅ API key works!');
        })
        .catch((error) => {
            console.log('❌ API key failed:', error.message);
            console.log('');
            console.log('💡 Troubleshooting:');
            console.log('1. Make sure your API key is correct');
            console.log('2. Check if it starts with "sk-"');
            console.log('3. Verify your OpenAI account has credits');
            console.log('4. Get a new key from: https://platform.openai.com/api-keys');
        });
        
} catch (error) {
    console.log('❌ Setup error:', error.message);
}
