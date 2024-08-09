import React, { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Project from './components/Project/Project';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Project />
    </>
  );
}

export default App;
