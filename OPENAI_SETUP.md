# OpenAI API Setup Guide

This project is configured to use the OpenAI API. Follow these steps to get started:

## 1. Get Your OpenAI API Key

1. Visit [OpenAI's website](https://platform.openai.com/)
2. Sign up or log in to your account
3. Navigate to the API section
4. Generate a new API key

## 2. Configure Your Environment

1. Open the `.env` file in this project
2. Replace `your_openai_api_key_here` with your actual API key:
   ```
   OPENAI_API_KEY=sk-your-actual-api-key-here
   ```

## 3. Install Dependencies

Run the following command to install required packages:

```bash
npm install
```

## 4. Test the Configuration

Run the demo to test your OpenAI integration:

```bash
npm start
```

Or test the AI features specifically:

```javascript
const { demonstrateAIFeatures } = require("./demo");
demonstrateAIFeatures();
```

## Security Notes

- ✅ Your `.env` file is already added to `.gitignore` to prevent accidental commits
- ✅ Never share your API key publicly
- ✅ Consider using environment variables in production
- ✅ Monitor your API usage on the OpenAI dashboard

## Available Features

- **AI Task Manager**: Extends the basic TaskManager with AI-powered features
- **Task Suggestions**: Generate contextual task suggestions
- **Task Enhancement**: Improve task descriptions with AI
- **Connection Testing**: Verify your API key works

## Usage Examples

```javascript
const { AITaskManager } = require("./demo");

const aiTasks = new AITaskManager();

// Generate suggestions
const suggestions = await aiTasks.generateTaskSuggestions("morning routine");

// Enhance a task
const enhanced = await aiTasks.enhanceTaskDescription("buy groceries");
```

## Troubleshooting

- **Invalid API Key**: Make sure your key starts with `sk-`
- **Network Issues**: Check your internet connection
- **Quota Exceeded**: Check your OpenAI usage limits
- **Missing Dependencies**: Run `npm install` again
