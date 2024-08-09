import React , {useEffect,useState} from 'react'

import './Home.css'
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
        <div className="img">
                    <div className="inner_img">
                    <div>
                    <iframe 
                                src="https://giphy.com/embed/SWoSkN6DxTszqIKEqv"
                                
                                className="giphy-embed" 
                                allowFullScreen
                                title="Giphy Animation"
                            ></iframe>
                        
                    </div>
                        

                    </div>
                </div>
            <div className="home_info">
                <div className="info">
                    <h1><p style={{fontSize:"80px"}}>{'<'}</p>{'\n\nHello, I\'m '}{' Arman'} <p style={{fontSize:"80px"}}>{'>'}</p>
                    </h1>
                        
                        <h2>{'<I design and develop websites.>'}</h2>
                        {/* <h3>{roles[currentRole]}</h3> */}
                </div>
                <div className="btn">
                    <button>Download CV</button>
                    <button>Contact ME</button>
                </div>

                
            </div>
            
        </div>
      
    </div>
  )
}

export default Home
