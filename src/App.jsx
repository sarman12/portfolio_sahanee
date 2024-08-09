import React, { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Project from './components/Project/Project';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Project />
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
