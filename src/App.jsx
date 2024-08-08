import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import './App.css'
import Project from './components/Project/Project'
import About from './components/About/About'
function App() {

  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Project/>
    </>
  )
}

export default App
