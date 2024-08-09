import React from 'react'
import './Navbar.css'
import { BsGithub, BsTwitter } from 'react-icons/bs'
import { LiaLinkedin } from 'react-icons/lia'
function Navbar() {
  return (
    <div className="navbar_container">
        <div className="navbar_content">
        <h1>S_arman</h1>
            <nav>
                <ul>
                    <li className="about">About</li>
                    <li className="projects">Projects</li>
                    <li className="contact_us">Contact Us</li>
                </ul>
            </nav>
            <div className="social">
                <BsGithub className='fa'/>
                <BsTwitter className='fa'/>
                <LiaLinkedin className='fa'/>
            </div>
        </div>
    </div>
  )
}

export default Navbar
