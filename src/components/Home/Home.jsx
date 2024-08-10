import React from 'react';
import './Home.css';
import Resume from '../../assets/resume.pdf'

function Home() {
    return (
        <div className="home_container">
            <div className="home_content">
                <div className="img">
                    <div className="inner_img">
                        <iframe 
                            src="https://giphy.com/embed/SWoSkN6DxTszqIKEqv"
                            className="giphy-embed" 
                            allowFullScreen
                            title="Giphy Animation"
                        ></iframe>
                    </div>
                </div>
                <div className="home_info">
                    <div className="info">
                        <h1>
                            <p className="angle-bracket">{'<'}</p>
                            <p className="greeting">Hello, I&apos;m</p>
                            <h1 className="name">Arman</h1>
                            <p className="angle-bracket-right">{'/>'}</p>
                        </h1>
                        <h2>{'<I develop websites that leave a lasting impact>'}</h2>
                    </div>
                    <div className="btn">
                        <a href={Resume} download className="btn-contact">Download CV</a>
                        <a href="#contact" className="btn-contact">Contact Me</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
