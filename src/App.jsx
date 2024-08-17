import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';
import { BiDownArrowAlt } from 'react-icons/bi';
import Main from './components/Main/Main';

function App() {
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScrollWidth = document.documentElement.scrollWidth - window.innerWidth;
      const currentScroll = window.scrollX;
      
      const newScrollWidth = (currentScroll / totalScrollWidth) * 100;
      setScrollWidth(newScrollWidth);
    };

    // Add the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar />
      {/* <div className="fixed_arrow" onClick={scrollToNextSection}>
        <span><BiDownArrowAlt/></span>
      </div> */}
      <div className="scroll-indicator" style={{ transform: `scaleX(${scrollWidth / 100})` }} />
      <Main />
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </>
  );
}

// const scrollToNextSection = () => {
//   const sections = document.querySelectorAll('section');
//   const currentScroll = window.scrollY;

//   // Find the next section that is below the current scroll position
//   for (let i = 0; i < sections.length; i++) {
//     if (sections[i].offsetTop > currentScroll) {
//       sections[i].scrollIntoView({ behavior: 'smooth' });
//       break;
//     }
//   }
// };

export default App;
