// Test file for AI Chat Extension
function calculateSum(a, b) {
    return a + b;
}

function findLargestNumber(numbers) {
    let largest = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i];
        }
    }
    return largest;
}

class UserManager {
    constructor() {
        this.users = [];
    }
    
    addUser(user) {
        this.users.push(user);
    }
    
    findUserById(id) {
        return this.users.find(user => user.id === id);
    }
    
    removeUser(id) {
        this.users = this.users.filter(user => user.id !== id);
    }
}

module.exports = { calculateSum, findLargestNumber, UserManager };
