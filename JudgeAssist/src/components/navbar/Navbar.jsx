import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.scss"; // Import your SCSS file for styling

const Navbar = () => {
  
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <Link to="/">JudgeAssist</Link>
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/myaccount">My Account</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link>

      </div>
    </div>
  );
}

export default Navbar;
