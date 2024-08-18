import React, { useState, useEffect } from 'react';
import './Main.css';
import Resume from '../../assets/resume.pdf';
import Photo from '../../assets/arman.jpg';
import Gemini from '../../assets/Gemini.png';
import Multi from '../../assets/multi.png';
import Recipe from '../../assets/recipe.png';
import Pdf from '../../assets/pdf.jpg';
import { BsTwitter,BsFacebook, BsGithub, BsInstagram, BsCodeSlash, BsUiChecks } from 'react-icons/bs';
import { LiaLinkedin } from 'react-icons/lia';
import { FaIdeal, FaUikit } from 'react-icons/fa';
import { FcIdea } from 'react-icons/fc';
import { SiFrontendmentor } from 'react-icons/si';
import { MdDeveloperMode, MdWeb } from 'react-icons/md';
import { BiCode, BiCodeCurly } from 'react-icons/bi';
function Main() {
  const [loading,setloading] = useState(false);
  useEffect (()=>{
    const time= setTimeout(() => {
      setloading(true)
    }, 2000);
    return ()=>clearTimeout(time);
  },[]);
  

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

      {loading? 
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
          <div className="social_div_home">
              <BsTwitter className="fa"/>
              <BsFacebook className="fa"/>
              <LiaLinkedin className="fa"/>
              <BsGithub className="fa"/>
              <BsInstagram className="fa"/>

          </div>

      </div> :

      <div className="spinner-container">
            <div className="spinner"></div>
        </div>}

      {/* About Section */}
      <div className="about_container" id='about'>
        <div className="about_heading">
          <h1>Know more about me</h1>
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
              applications using HTML, CSS, JavaScript, and React JS, including a Multi-Purpose App, Gemini Clone, and PDF Generator. 
              These projects demonstrate my ability to integrate APIs, solve complex problems, and create user-friendly interfaces.
            </p>
          </div>
          </div>
          <div className="skills">
            <div>
              <h3>Skills:</h3>
              <p>
                <strong>Language:</strong> C++,Javascript,python <br/>
                <strong>Languages & Frameworks:</strong> React.js, Node.js,Express Js <br/>
                <strong>Tools & Technologies:</strong> Git, GitHub, MySQL <br/>
                <strong>Areas of Expertise:</strong> Frontend Development, Fullstack Development, Responsive Design, UI/UX
              </p>
            </div>

            <div>
              <h3>Future Goals:</h3>
              <p>
                I’m eager to expand my expertise in backend technologies like Node.js and explore cloud computing services. My goal is to become a versatile fullstack developer capable of handling complex, large-scale applications.
              </p>
            </div>
            <div>
              <h3>Personal Interests:</h3>
              <p>
                When I’m not coding, I enjoy reading about the latest tech trends,  and hiking. I also love to play football!
              </p>

            </div>
            
          </div>
        


      </div>


<div className="services_container" id="service">
  <div className="services_heading">
    <h1>What I Can Do for You</h1>
    <p>Transform your ideas into reality with my expertise</p>
  </div>
  <div className="services_content">
    <div className="service_card">
      <BiCodeCurly />
      <h2>Fullstack Development</h2>
      <p>
        I can build fully responsive and dynamic web applications using the MERN stack (MongoDB, Express.js, React, Node.js), ensuring a seamless user experience from front to back.
      </p>
    </div>
    <div className="service_card">
      <BiCode />
      <h2>Frontend Design</h2>
      <p>
        I specialize in creating visually appealing and user-friendly interfaces with HTML, CSS, and JavaScript, tailored to your brand and audience.
      </p>
    </div>
    <div className="service_card">
      <FcIdea />
      <h2>Problem Solving</h2>
      <p>
        With a strong foundation in Data Structures and Algorithms, I can tackle complex challenges and optimize your code for performance and scalability.
      </p>
    </div>
  </div>
  <div className="services_btn">
    <a href="#projects" className="btns">View My Projects</a>
  </div>
</div>


{/* Project Section */}
<div className="project_container" id="projects">
  <div className="project_heading">
    <h1>Check out my projects</h1>
  </div>
  <div className="projects">
    <div className="project">
      <div className="project_img">
        <img src={Multi} alt="Multi-Purpose App" />
      </div>
      <div className="project_description">
        <p>This is a Multi-Purpose App integrating features like Wikipedia, weather forecast, and text-to-speech functionalities. Built using React.js, CSS, and JavaScript.</p>
        <div className="project_btn">
          <a href="https://github.com/sarman12/Multi_purpose_app" target="_blank" rel="noopener noreferrer" className="btn-contact">View on GitHub</a>
        </div>
      </div>
    </div>

    <div className="project">
      <div className="project_img">
        <img src={Recipe} alt="Recipe App" />
      </div>
      <div className="project_description">
        <p>This Recipe App allows users to explore various recipes with detailed instructions. Developed using React.js, CSS, and JavaScript.</p>
        <div className="project_btn">
          <a href="https://github.com/sarman12/recipe_app_frontend" target="_blank" rel="noopener noreferrer" className="btn-contact">View on GitHub</a>
        </div>
      </div>
    </div>

    <div className="project">
      <div className="project_img">
        <img src={Pdf} alt="PDF Generator App" />
      </div>
      <div className="project_description">
        <p>A PDF Generator App that lets users create PDFs from text input. Implemented with React.js, CSS, and JavaScript.</p>
        <div className="project_btn">
          <a href="https://github.com/sarman12/Question_paper" target="_blank" rel="noopener noreferrer" className="btn-contact">View on GitHub</a>
        </div>
      </div>
    </div>

    <div className="project">
      <div className="project_img">
        <img src={Gemini} alt="Gemini Clone" />
      </div>
      <div className="project_description">
        <p>A clone of the Gemini website, showcasing responsive design and UI/UX skills. Built using HTML, CSS, and JavaScript.</p>
        <div className="project_btn">
          <a href="https://github.com/sarman12/Gemini_clone" target="_blank" rel="noopener noreferrer" className="btn-contact">View on GitHub</a>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  );
}

export default Main;
