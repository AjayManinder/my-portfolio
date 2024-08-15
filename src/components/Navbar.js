import React from 'react';
import { FaHome, FaUser, FaCode, FaGraduationCap, FaTools,FaUserTie } from 'react-icons/fa';
import { GrProjects } from "react-icons/gr";
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="navbar">
      <ul style={{ display: 'flex', justifyContent: 'center', listStyleType: 'none', margin: 0, padding: 0, flexDirection:'row' }}>
      <li style={{ margin: '0 15px' }}>
      <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <FaUserTie style={{ marginRight: '8px' }} /> Profile
        </Link>    
        </li>
       
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
          <a href="#technologies">
            <FaTools /> Technologies
          </a>
        </li>
        <li style={{ margin: '0 15px' }}>
          <a href="#projects">
            <GrProjects /> Projects
          </a>
        </li>
        <li style={{ margin: '0 15px' }}>
          <a href="#personal">
            <FaCode /> personal
          </a>
        </li>
        <li style={{ margin: '0 15px' }}>
          <a href="#education">
            <FaGraduationCap /> Education
          </a>
        </li>
       
      </ul>
    </nav>
  );
};

export default Navbar;
