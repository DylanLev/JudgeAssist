import React from 'react';
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>About Us</h3>
            <p>Information about JudgeAssist and its mission.</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/models">Models</a></li>
              <li><a href="/sharing">Sharing</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>Email: info@judgeassist.com</p>
            <p>Phone: +1234567890</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} JudgeAssist. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
