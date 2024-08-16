import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { BsGithub, BsTwitter } from 'react-icons/bs';
import { LiaLinkedin } from 'react-icons/lia';
import { FaHome, FaUser, FaEnvelope } from 'react-icons/fa'; // Import icons for mobile view
import logo from '../../assets/sahanee_logo.png';
import '../responsive.css';

function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSocial = (name) => {
    if (name === 'linkedin') {
      window.open('https://www.linkedin.com/in/s-arman/');
    } else if (name === 'twitter') {
      window.open('https://twitter.com/sahanee33743');
    } else {
      window.open('https://github.com/sarman12');
    }
  };

  return (
    <>
      <div className={`navbar_container ${navOpen ? 'open' : ''} ${isMobile ? 'mobile' : ''}`}>
        <div className="navbar_content">
          <nav className='nav_menu'>
            <ul>
              <li className={activeSection === 'about' ? 'active' : ''}>
                <a href="#about">{isMobile ? <FaUser /> : 'About Me'}</a>
              </li>
              <li className={activeSection === 'projects' ? 'active' : ''}>
                <a href="#projects">{isMobile ? <FaHome /> : 'My Work'}</a>
              </li>
              <li className={activeSection === 'contact' ? 'active' : ''}>
                <a href="#contact">{isMobile ? <FaEnvelope /> : 'Contact Me'}</a>
              </li>
            </ul>
          </nav>
          <div className="social">
            <BsGithub onClick={() => handleSocial('github')} className="fa" />
            <BsTwitter onClick={() => handleSocial('twitter')} className="fa" />
            <LiaLinkedin onClick={() => handleSocial('linkedin')} className="fa" />
          </div>
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
        <img
          src={logo}
          className="logo"
          onClick={() => setNavOpen(!navOpen)}
          alt="Logo"
        />
      </div>
    </>
  );
}

export default Navbar;
