// Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import "./Login.scss";

const Login = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Check if username and password match
    if (username === 'admin' && password === 'admin'||username === 'Dylan' && password === 'Dylan') {
      // Redirect to /connected/:username if username and password match
      navigate(`/connected/${username}`);
    } else {
      // Display an error message or handle invalid credentials
      setError('Invalid username or password');
    }
  }

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input 
            type="text" 
            id="username" 
            name="username" 
            placeholder="Enter your username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input 
            type="password" 
            id="password" 
            name="password" 
            placeholder="Enter your password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
        </div>
        <button type="submit">Login</button>
        {error && <p className="error-message">{error}</p>}
      </form>
      <p>Don't have an account? <a href="/register">Create one</a></p>
    </div>
  );
}

export default Login;
