import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { BsGithub, BsTwitter } from 'react-icons/bs';
import { LiaLinkedin } from 'react-icons/lia';
import logo from '../../assets/sahanee_logo.png';

function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const handleSocial = (name) => {
    if (name === 'linkedin') {
      window.open('https://www.linkedin.com/in/s-arman/');
    } else if (name === 'twitter') {
      window.open('https://twitter.com/sahanee33743');
    } else {
      window.open('https://github.com/sarman12');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let currentSection = 'home';
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 60) {
          currentSection = section.getAttribute('id');
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`navbar_container ${navOpen ? 'open' : ''}`}>
        <div className="navbar_content">
          <nav className={`nav_menu ${navOpen ? 'open' : ''}`}>
            <ul>
              <li className={activeSection === 'about' ? 'active' : ''}>
                <a href="#about">About Me</a>
              </li>
              <li className={activeSection === 'projects' ? 'active' : ''}>
                <a href="#projects">My Work</a>
              </li>
              <li className={activeSection === 'contact' ? 'active' : ''}>
                <a href="#contact">Contact Me</a>
              </li>
            </ul>
          </nav>
          <div className="social">
            <BsGithub onClick={() => handleSocial('github')} className="fa" />
            <BsTwitter onClick={() => handleSocial('twitter')} className="fa" />
            <LiaLinkedin onClick={() => handleSocial('linkedin')} className="fa" />
          </div>
        </div>
        <svg width="0" height="0px">
          <defs>
            <clipPath id="rounded-bottom" clipPathUnits="objectBoundingBox">
              <path d="M 0,0 H 1 V 0.8 C 0.7,1 0.3,1 0,0.8 Z"/>
            </clipPath>
          </defs>
        </svg>

      </div>
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
