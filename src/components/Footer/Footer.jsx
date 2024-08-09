import React from 'react';
import './Footer.css';
import { FaFacebook } from 'react-icons/fa';
import { BsArrowUp, BsGithub, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';

function Footer() {
    return (
        <footer>
            <div className="footer_container">
                

                <div className="col">
                    <div className="copyright">
                        <span>© Copyright 2024 </span> 
                        <span>Design by Sahanee Arman</span> 
                    </div>                      
                </div>

                <div id="go-top">
                    <a className="smoothscroll" title="Back to Top" href="#top"><BsArrowUp/></a>
                </div>
            </div> {/* /row */}       
        </footer>
    );
}

export default Footer;
