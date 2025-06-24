/**
 * User Authentication Service
 * Handles user login, registration, and session management
 */

class AuthService {
    constructor() {
        this.users = new Map();
        this.sessions = new Map();
    }

    /**
     * Register a new user
     * @param {string} username - User's username
     * @param {string} email - User's email address
     * @param {string} password - User's password (should be hashed)
     * @returns {Object} Registration result
     */
    async registerUser(username, email, password) {
        // Validate input
        if (!username || !email || !password) {
            throw new Error('All fields are required');
        }

        // Check if user already exists
        if (this.users.has(email)) {
            throw new Error('User already exists');
        }

        // Create new user (Note: In production, password should be hashed!)
        const user = {
            id: this.generateId(),
            username,
            email,
            password, // WARNING: This should be hashed with bcrypt or similar
            createdAt: new Date(),
            isActive: true
        };

        this.users.set(email, user);
        return { success: true, userId: user.id };
    }

    /**
     * Authenticate user login
     * @param {string} email - User's email
     * @param {string} password - User's password
     * @returns {Object} Login result with session token
     */
    async loginUser(email, password) {
        const user = this.users.get(email);
        
        if (!user) {
            throw new Error('Invalid credentials');
        }

        // In production, use bcrypt.compare() for password verification
        if (user.password !== password) {
            throw new Error('Invalid credentials');
        }

        if (!user.isActive) {
            throw new Error('Account is deactivated');
        }

        // Create session
        const sessionToken = this.generateSessionToken();
        const session = {
            userId: user.id,
            email: user.email,
            createdAt: new Date(),
            expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000) // 24 hours
        };

        this.sessions.set(sessionToken, session);
        
        return {
            success: true,
            token: sessionToken,
            user: {
                id: user.id,
                username: user.username,
                email: user.email
            }
        };
    }

    /**
     * Validate session token
     * @param {string} token - Session token
     * @returns {Object} User information if valid
     */
    validateSession(token) {
        const session = this.sessions.get(token);
        
        if (!session) {
            throw new Error('Invalid session');
        }

        if (new Date() > session.expiresAt) {
            this.sessions.delete(token);
            throw new Error('Session expired');
        }

        const user = Array.from(this.users.values())
            .find(u => u.id === session.userId);

        return {
            id: user.id,
            username: user.username,
            email: user.email
        };
    }

    /**
     * Logout user by invalidating session
     * @param {string} token - Session token to invalidate
     */
    logoutUser(token) {
        this.sessions.delete(token);
        return { success: true };
    }

    /**
     * Generate unique ID
     * @returns {string} Unique identifier
     */
    generateId() {
        return Math.random().toString(36).substr(2, 9);
    }

    /**
     * Generate session token
     * @returns {string} Session token
     */
    generateSessionToken() {
        return Math.random().toString(36).substr(2, 15) + Date.now().toString(36);
    }
}

module.exports = AuthService;
