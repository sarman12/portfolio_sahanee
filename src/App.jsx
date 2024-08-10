import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Project from './components/Project/Project';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';
import { BiDownArrowAlt } from 'react-icons/bi';

function App() {

  const scrollToNextSection = () => {
    const sections = document.querySelectorAll('section');
    const currentScroll = window.scrollY;

    // Find the next section that is below the current scroll position
    for (let i = 0; i < sections.length; i++) {
      if (sections[i].offsetTop > currentScroll) {
        sections[i].scrollIntoView({ behavior: 'smooth' });
        break;
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className="fixed_arrow" onClick={scrollToNextSection}>
        <span><BiDownArrowAlt/></span>
      </div>
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Project />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </>
  );
}

export default App;
