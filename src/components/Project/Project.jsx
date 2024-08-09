import React from 'react';
import './Project.css';
import Gemini from '../../assets/Gemini.png';
import Multi from '../../assets/multi.png';
import Recipe from '../../assets/recipe.png';
import Pdf from '../../assets/pdf.jpg';

function Project() {
  return (
    <div className="project_container">
      <div className="project_content">
        <p>Check out my projects</p>
        <div className="projects">
          <div className="project">
            <div className="project_img">
            <img src={Multi} alt="Multi-Purpose App" />

            </div>
            
            <div className="project_description">
              <p>This is a Multi-Purpose App integrating features like Wikipedia, weather forecast, and text-to-speech functionalities. Built using React.js, CSS, and JavaScript.</p>
              <div className="project_buttons">
                <a href="https://github.com/yourusername/multi-purpose-app" target="_blank" rel="noopener noreferrer" className="button">View on GitHub</a>
              </div>
            </div>
          </div>

          <div className="project">
            <img src={Recipe} alt="Recipe App" />
            <div className="project_description">
              <p>This Recipe App allows users to explore various recipes with detailed instructions. Developed using React.js, CSS, and JavaScript.</p>
              <div className="project_buttons">
                <a href="https://github.com/yourusername/recipe-app" target="_blank" rel="noopener noreferrer" className="button">View on GitHub</a>
              </div>
            </div>
          </div>

          <div className="project">
            <img src={Pdf} alt="PDF Generator App" />
            <div className="project_description">
              <p>A PDF Generator App that lets users create PDFs from text input. Implemented with React.js, CSS, and JavaScript.</p>
              <div className="project_buttons">
                <a href="https://github.com/yourusername/pdf-generator-app" target="_blank" rel="noopener noreferrer" className="button">View on GitHub</a>
              </div>
            </div>
          </div>

          <div className="project">
            <img src={Gemini} alt="Gemini Clone" />
            <div className="project_description">
              <p>A clone of the Gemini website, showcasing responsive design and UI/UX skills. Built using HTML, CSS, and JavaScript.</p>
              <div className="project_buttons">
                <a href="https://github.com/yourusername/gemini-clone" target="_blank" rel="noopener noreferrer" className="button">View on GitHub</a>
              </div>
            </div>
          </div>

          {/* <div className="project">
            <img src="" alt="Weather App" />
            <div className="project_description">
              <p>This Weather App provides a 5-day weather forecast excluding today. Developed with React.js, CSS, and JavaScript.</p>
              <div className="project_buttons">
                <a href="https://github.com/yourusername/weather-app" target="_blank" rel="noopener noreferrer" className="button">View on GitHub</a>
              </div>
            </div>
          </div> */}

        </div>
      </div>
    </div>
  );
}

export default Project;
