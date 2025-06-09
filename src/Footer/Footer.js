import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="corporate-footer">
      <div className="footer-container">
        <div className="footer-left">
          <h4 className="footer-name">Ajay Maninder</h4>
          <p>Email: <a href="mailto:ajay@example.com">ajaymaninder1111@gmail.com</a></p>
          <p>Phone: <a href="tel:+11234567890">+1 (816) 872-8004</a></p>
        </div>

        <div className="footer-right">
          <div className="footer-social">
            <a href="https://github.com/AjayManinder" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/ajay-r-235191263/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
          </div>
          {/* <div className="footer-links">
            <a href="#profile">Profile</a>
            <a href="#home">Home</a>
            <a href="#technologies">Technologies</a>
            <a href="#education">Education</a>
            <a href="#projects">Projects</a>
          </div> */}
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Ajay. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
