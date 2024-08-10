import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { BsGithub, BsTwitter } from 'react-icons/bs';
import { LiaLinkedin } from 'react-icons/lia';
import logo from '../../assets/sahanee_logo.png';

function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let currentSection = 'home';
      sections.forEach(section => {
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
          {/* <img 
            src={logo} 
            className="logo" 
            onClick={() => setNavOpen(!navOpen)} 
            alt="Logo" 
          /> */}
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
            <BsGithub className='fa' />
            <BsTwitter className='fa' />
            <LiaLinkedin className='fa' />
          </div>
        </div>
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
