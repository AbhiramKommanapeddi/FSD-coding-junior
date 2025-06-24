// Sample JavaScript file for testing the AI Chat Extension
console.log('Hello from test workspace!');

function greetUser(name) {
    return `Hello, ${name}! Welcome to the AI Chat Extension test.`;
}

class Calculator {
    add(a, b) {
        return a + b;
    }
    
    subtract(a, b) {
        return a - b;
    }
    
    multiply(a, b) {
        return a * b;
    }
    
    divide(a, b) {
        if (b === 0) {
            throw new Error('Division by zero is not allowed');
        }
        return a / b;
    }
}

module.exports = { greetUser, Calculator };
