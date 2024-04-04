import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Utilisation de useNavigate
import "./Register.scss";

const Register = () => {
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // Utilisation de useNavigate pour la redirection

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessage("Your account was successfully created.");
    setTimeout(() => {
      setMessage("");
      navigate("/login"); // Redirection vers la page de login après 4 secondes
    }, 4000);
  }

  return (
    <div className="register-container">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" placeholder="Enter your username" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" placeholder="Enter your password"  />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm your password" />
        </div>
        <button type="submit">Register</button>
      </form>
      {message && <p>{message}</p>}
      <p>Already have an account? <a href="/login">Login</a></p>
    </div>
  );
}

export default Register;