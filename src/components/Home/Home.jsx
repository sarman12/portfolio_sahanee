import React, { useState, useEffect } from 'react';
import './Home.css';
import Photo from '../../assets/arman.jpg';

function Home() {
    const roles = ["Software Developer", "Frontend Developer", "MERN Stack Developer"];
    const [currentRole, setCurrentRole] = useState(0);

    useEffect(() => {
        const roleInterval = setInterval(() => {
            setCurrentRole((prevRole) => (prevRole + 1) % roles.length);
        }, 3000); // Change role every 3 seconds

        return () => clearInterval(roleInterval); // Cleanup interval on component unmount
    }, []);

    return (
        <div className="home_container">
            <div className="home_content">
                <div className="home_info">
                    <div className="info">
                        <h3>Hello, I'm</h3>
                        <h1>Sahanee Arman</h1>
                        <p>{roles[currentRole]}</p>
                    </div>
                    <div className="btn">
                        <button>Download CV</button>
                        <button>Contact Me</button>
                    </div>
                </div>
                <div className="img">
                    <div className="inner_img">
                        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                            <iframe 
                                src="https://giphy.com/embed/SWoSkN6DxTszqIKEqv"
                                width="100%" 
                                height="100%" 
                                style={{ position: 'absolute' }} 
                                frameBorder="0" 
                                className="giphy-embed" 
                                allowFullScreen
                                title="Giphy Animation"
                            ></iframe>
                        </div>
                        {/* If you want to use the image instead of the GIF, uncomment the line below */}
                        {/* <img src={Photo} alt="Sahanee Arman" /> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
