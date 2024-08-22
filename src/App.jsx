import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';
import { BiDownArrowAlt, BiMoon } from 'react-icons/bi';
import Main from './components/Main/Main';
import { CgSun } from 'react-icons/cg';

function App() {
  const [dark,setdark] = useState(false);
  const handleState = () => {
    setdark(!dark);
  }
  

  return (
    <div className={dark? 'body_dark':'body'}>
      <Navbar state={dark} />
      <Main state={dark} />
      <Contact state={dark} />
      <Footer />
      <div className='dark'>
        {dark?  <CgSun onClick={handleState}/> : <BiMoon style={{color:'white'}} onClick={handleState} /> }
        
      </div>
    </div>
  );
}


export default App;
