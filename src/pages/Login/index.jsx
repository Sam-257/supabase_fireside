import React, { useState } from 'react';
import './login.scss';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = () => {
        // Add your login logic here
        console.log('Logging in with:', { username, password });
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <h2>Login</h2>
                <div className="input-container">
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="input-container">
                    <label htmlFor="password">Password:</label>
                    <div className="password-input">
                        <input
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                        <span
                        className={`eye-icon ${showPassword ? 'visible' : ''}`}
                        onClick={() => setShowPassword(!showPassword)}
                        >
                        {showPassword ? '👁️' : '👁️‍🗨️'}
                        </span>
                    </div>
                </div>
                <button onClick={handleLogin}>Login</button>
            </div>
        </div>
    );
};

export default LoginPage;
