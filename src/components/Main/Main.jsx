import React, { useState, useEffect } from 'react';
import './Main.css';
import Resume from '../../assets/resume.pdf';
import Photo from '../../assets/arman.jpg';
import Gemini from '../../assets/Gemini.png';
import Multi from '../../assets/multi.png';
import Recipe from '../../assets/recipe.png';
import Pdf from '../../assets/pdf.jpg';
import '../responsive.css'
import { BsTwitter,BsFacebook, BsGithub, BsInstagram } from 'react-icons/bs';
import { LiaLinkedin } from 'react-icons/lia';
function Main() {
  

  useEffect(() => {
    const handleScroll = () => {
      const projects = document.querySelectorAll('.project');
      const triggerBottom = window.innerHeight / 1.2;

      projects.forEach(project => {
        const projectTop = project.getBoundingClientRect().top;
        const projectBottom = project.getBoundingClientRect().bottom;

        if (projectTop < triggerBottom && projectBottom > 0) {
          project.classList.add('visible');
        } else {
          project.classList.remove('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="home_container" id='home'>
        <div className="home_info">
          <div className="info">
            <h1 className="title">
              <p className="angle-bracket">{`< Hello, I'm`}</p>
              <h1 className="name">{'Sahanee Arman />'}</h1>
            </h1>
            {/* <h2>{'<I develop websites that leave a lasting impact'}</h2> */}
            <h3 className="description">
              Fullstack Developer | Frontend Developer
            </h3>
          </div>
          <div className="btn">
            <a href={Resume} download className="btn-contact">Download CV</a>
            <a href="#contact" className="btn-contact">Contact Me</a>
          </div>
          </div>
          <div className="social_div">
              <BsTwitter className="fa"/>
              <BsFacebook className="fa"/>
              <LiaLinkedin className="fa"/>
              <BsGithub className="fa"/>
              <BsInstagram className="fa"/>

          </div>

      </div>

      {/* About Section */}
      <div className="about_container" id='about'>
        <div className="about_heading">
          <p>Know more about me</p>
          <h1>Sahanee Arman</h1>
        </div>
        <div className="about_content">
          <div className="about_img">
            <div className="about_inner_img">
              <img src={Photo} alt="Sahanee Arman" />
            </div>
          </div>
          <div className="about_me">
            <p>
              I am a final-year B.Tech student in Computer Science and Engineering, specializing in web development. 
              With a strong foundation in Data Structures, Algorithms, and Software Engineering, I've built responsive 
              applications using HTML, CSS, JavaScript, and React JS such as a Multi-Purpose App and Gemini Clone,PDF generator, 
              demonstrate my ability to integrate APIs and solve complex problems.
              I’m continuously expanding my skills in backend technologies like Node.js. 
              I am eager to apply my expertise to new challenges in software development.
            </p>
          </div>
        </div>
      </div>

      {/* Project Section */}
      <div className="project_container" id="projects">
        <div className="project_content">
          <p>Check out my projects</p>
          <div className="projects">
            <div className="project">
              <div className="project_img">
                <img src={Multi} alt="Multi-Purpose App" />
              </div>
              <div className="project_description">
                <p style={{color:'white'}}>This is a Multi-Purpose App integrating features like Wikipedia, weather forecast, and text-to-speech functionalities. Built using React.js, CSS, and JavaScript.</p>
                <div className="btn">
                  <a href="https://github.com/sarman12/Multi_purpose_app" target="_blank" rel="noopener noreferrer" className="btn-contact">View on GitHub</a>
                </div>
              </div>
            </div>

            <div className="project">
              <img src={Recipe} alt="Recipe App" />
              <div className="project_description">
                <p style={{color:'white'}}>This Recipe App allows users to explore various recipes with detailed instructions. Developed using React.js, CSS, and JavaScript.</p>
                <div className="btn">
                  <a href="https://github.com/sarman12/recipe_app_frontend" target="_blank" rel="noopener noreferrer" className="btn-contact">View on GitHub</a>
                </div>
              </div>
            </div>

            <div className="project">
              <img src={Pdf} alt="PDF Generator App" />
              <div className="project_description">
                <p style={{color:'white'}}>A PDF Generator App that lets users create PDFs from text input. Implemented with React.js, CSS, and JavaScript.</p>
                <div className="btn">
                  <a href="https://github.com/sarman12/Question_paper" target="_blank" rel="noopener noreferrer" className="btn-contact">View on GitHub</a>
                </div>
              </div>
            </div>

            <div className="project">
              <img src={Gemini} alt="Gemini Clone" />
              <div className="project_description">
                <p style={{color:'white'}}>A clone of the Gemini website, showcasing responsive design and UI/UX skills. Built using HTML, CSS, and JavaScript.</p>
                <div className="btn">
                  <a href="https://github.com/sarman12/Gemini_clone" target="_blank" rel="noopener noreferrer" className="btn-contact">View on GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
