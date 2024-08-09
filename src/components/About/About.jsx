import React, { useState } from 'react';
import './About.css';
import Photo from '../../assets/arman.jpg';

function About() {
    const [activeTab, setActiveTab] = useState('skills');

    const openTab = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <div className="about_container">
            <div className="about_heading">
                <p>Know more about me</p>
                <h1>About Me</h1>
            </div>
            <div className="about_content">
                <div className="about_img">
                    <div className="about_inner_img">
                        <img src={Photo} alt="Sahanee Arman" />
                    </div>
                </div>
                <div className="about_me">
                    <p>I am a final-year B.Tech student in Computer Science and Engineering, specializing in web development. With a strong foundation in Data Structures, Algorithms, and Software Engineering, I've built responsive applications using HTML, CSS, JavaScript, and React JS such as a Multi-Purpose App and Gemini Clone,PDF generator, demonstrate my ability to integrate APIs and solve complex problems.
               I’m continuously expanding my skills in backend technologies like Node.js. I am eager to apply my expertise to new challenges in software development.
                    </p>
                    {/* <div className="tab-titles">
                        <p 
                            className={`tab-links ${activeTab === 'skills' ? 'active-links' : ''}`} 
                            onClick={() => openTab('skills')}
                        >
                            Skills
                        </p>
                        <p 
                            className={`tab-links ${activeTab === 'education' ? 'active-links' : ''}`} 
                            onClick={() => openTab('education')}
                        >
                            Education
                        </p>
                        <p 
                            className={`tab-links ${activeTab === 'Coding_Platforms' ? 'active-links' : ''}`} 
                            onClick={() => openTab('Coding_Platforms')}
                        >
                            Coding Platforms
                        </p>
                    </div>
                    <div className={`tab-contentes ${activeTab === 'skills' ? 'active-tab' : ''}`} id="skills">
                        <ul>
                            <li>Competitive Programmer</li>
                            <li>Full Stack Web Developer</li>
                        </ul>
                    </div>
                    <div className={`tab-contentes ${activeTab === 'Coding_Platforms' ? 'active-tab' : ''}`} id="experience">
                        <ul>
                            <li><span>LeetCode -</span>Total Questions Solved: 100</li>
                            <li><span>GeeksForGeeks- </span>Total Questions Solved: 400</li>
                            <li><span>Development- </span>Still Newbie/Fresher</li>
                        </ul>
                    </div>
                    <div className={`tab-contentes ${activeTab === 'education' ? 'active-tab' : ''}`} id="education">
                        <ul>
                            <li><span>2022 - current (2025)- </span>Pursuing B-Tech in CSE from MAKAUT</li>
                            <li><span>2019 - 2022 -</span>Completed Diploma in Civil Engineering from AJC Bose Polytechnic College</li>
                            <li><span>Schooling -</span>Completed Schooling from Dhanyakuria High School</li>
                        </ul>
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default About;
