import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { BsGithub, BsTwitter } from 'react-icons/bs';
import { LiaLinkedin } from 'react-icons/lia';
import { FaHome, FaUser, FaEnvelope, FaServicestack } from 'react-icons/fa'; // Import icons for mobile view
import logo from '../../assets/sahanee_logo.png';
import { BiMenu, BiNavigation, BiX } from 'react-icons/bi';

function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  
  return (
    <>
      <div className={`navbar_container ${navOpen ? 'open' : ''}`}>
        <div className="navbar_content">
          <nav className='nav_menu'>
            <ul>
              <li className={activeSection === 'about' ? 'active' : ''}>
                <a href="#home">Home</a>
              </li>
              
              <li className={activeSection === 'about' ? 'active' : ''}>
                <a href="#about">About Me</a>
              </li>
              <li className={activeSection === 'about' ? 'active' : ''}>
                <a href="#service">My Service</a>
              </li>
              <li className={activeSection === 'projects' ? 'active' : ''}>
                <a href="#projects">My Work</a>
              </li>
              <li className={activeSection === 'contact' ? 'active' : ''}>
                <a href="#contact">Contact Me</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <svg width="0" height="0px">
          <defs>
            <clipPath id="rounded-bottom" clipPathUnits="objectBoundingBox">
              <path d="M 0,0 H 1 V 0.8 C 0.7,1 0.3,1 0,0.8 Z"/>
            </clipPath>
            <clipPath id="rounded-bottom-mobile" clipPathUnits="objectBoundingBox">
              <path d="M 0,0 H 1 V 0.95 C 0.5,1 0.5,1 0,0.95 Z"/>
            </clipPath>
          </defs>
        </svg>
      <div className="logo-div">
        {navOpen? <BiX className="logo" onClick={() => setNavOpen(!navOpen)}/> : <BiMenu className="logo" onClick={() => setNavOpen(!navOpen)}/>}
              
      </div>
    </>
  );
}

export default Navbar;
