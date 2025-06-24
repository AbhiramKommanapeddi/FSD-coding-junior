import React, { useState, useEffect } from 'react';
import './UserProfile.css';

/**
 * UserProfile Component
 * Displays and manages user profile information
 */
const UserProfile = ({ userId, onUpdate }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [editing, setEditing] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        bio: '',
        avatar: ''
    });

    useEffect(() => {
        fetchUserProfile();
    }, [userId]);

    const fetchUserProfile = async () => {
        try {
            setLoading(true);
            const response = await fetch(`/api/users/${userId}`);
            
            if (!response.ok) {
                throw new Error('Failed to fetch user profile');
            }
            
            const userData = await response.json();
            setUser(userData);
            setFormData({
                name: userData.name || '',
                email: userData.email || '',
                bio: userData.bio || '',
                avatar: userData.avatar || ''
            });
        } catch (error) {
            console.error('Error fetching user profile:', error);
            // TODO: Show error message to user
        } finally {
            setLoading(false);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch(`/api/users/${userId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('Failed to update profile');
            }

            const updatedUser = await response.json();
            setUser(updatedUser);
            setEditing(false);
            
            if (onUpdate) {
                onUpdate(updatedUser);
            }
        } catch (error) {
            console.error('Error updating profile:', error);
            // TODO: Show error message to user
        }
    };

    const handleCancel = () => {
        setFormData({
            name: user.name || '',
            email: user.email || '',
            bio: user.bio || '',
            avatar: user.avatar || ''
        });
        setEditing(false);
    };

    if (loading) {
        return (
            <div className="user-profile loading">
                <div className="spinner"></div>
                <p>Loading profile...</p>
            </div>
        );
    }

    if (!user) {
        return (
            <div className="user-profile error">
                <p>Failed to load user profile</p>
                <button onClick={fetchUserProfile}>Retry</button>
            </div>
        );
    }

    return (
        <div className="user-profile">
            <div className="profile-header">
                <div className="avatar-container">
                    <img 
                        src={user.avatar || '/default-avatar.png'} 
                        alt={`${user.name}'s avatar`}
                        className="avatar"
                    />
                    {editing && (
                        <div className="avatar-edit">
                            <input
                                type="url"
                                name="avatar"
                                value={formData.avatar}
                                onChange={handleInputChange}
                                placeholder="Avatar URL"
                            />
                        </div>
                    )}
                </div>
                
                <div className="profile-info">
                    {editing ? (
                        <form onSubmit={handleSubmit} className="edit-form">
                            <div className="form-group">
                                <label htmlFor="name">Name:</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="bio">Bio:</label>
                                <textarea
                                    id="bio"
                                    name="bio"
                                    value={formData.bio}
                                    onChange={handleInputChange}
                                    rows="4"
                                    placeholder="Tell us about yourself..."
                                />
                            </div>
                            
                            <div className="form-actions">
                                <button type="submit" className="btn-primary">
                                    Save Changes
                                </button>
                                <button 
                                    type="button" 
                                    onClick={handleCancel}
                                    className="btn-secondary"
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    ) : (
                        <div className="profile-display">
                            <h2>{user.name}</h2>
                            <p className="email">{user.email}</p>
                            <p className="bio">{user.bio || 'No bio provided'}</p>
                            
                            <button 
                                onClick={() => setEditing(true)}
                                className="btn-primary"
                            >
                                Edit Profile
                            </button>
                        </div>
                    )}
                </div>
            </div>
            
            <div className="profile-stats">
                <div className="stat">
                    <span className="stat-value">{user.postsCount || 0}</span>
                    <span className="stat-label">Posts</span>
                </div>
                <div className="stat">
                    <span className="stat-value">{user.followersCount || 0}</span>
                    <span className="stat-label">Followers</span>
                </div>
                <div className="stat">
                    <span className="stat-value">{user.followingCount || 0}</span>
                    <span className="stat-label">Following</span>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
