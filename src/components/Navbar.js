import React from 'react';
import { FaHome, FaUser, FaCode, FaGraduationCap, FaTools } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul style={{ display: 'flex', justifyContent: 'center', listStyleType: 'none', margin: 0, padding: 0 }}>
        <li style={{ margin: '0 15px' }}>
          <a href="#home">
            <FaHome /> Home
          </a>
        </li>
        <li style={{ margin: '0 15px' }}>
          <a href="#professional-summary">
            <FaUser /> Professional Summary
          </a>
        </li>
        <li style={{ margin: '0 15px' }}>
          <a href="#projects">
            <FaCode /> Projects
          </a>
        </li>
        <li style={{ margin: '0 15px' }}>
          <a href="#education">
            <FaGraduationCap /> Education
          </a>
        </li>
        <li style={{ margin: '0 15px' }}>
          <a href="#technologies">
            <FaTools /> Technologies
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
