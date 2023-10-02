import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Minimalistic icons for show/hide password
import './login.scss'

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <div className="input-container">
        <input type="text" placeholder="Username" className="login-input" />
      </div>
      <div className="input-container">
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder="Password"
          className="login-input"
        />
        <span className="password-toggle" onClick={togglePasswordVisibility}>
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </span>
      </div>
      <div className="login-actions">
        <button className="login-button">Login</button>
        <span className="forgot-password">Forgot Password?</span>
      </div>
    </div>
  );
};

export default LoginPage;
