import React from 'react';
import './Footer.css';
import { FaFacebook } from 'react-icons/fa';
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';

function Footer() {
    return (
        <footer>
            <div className="row">
                

                <div className="col-eight tab-full">
                    <div className="copyright">
                        <span>© Copyright 2018 </span> 
                        <span>Design by <a href="http://www.styleshout.com/">styleshout</a></span> 
                        <span>Distributed by <a href="https://themewagon.com/">themewagon</a></span>             
                    </div>                      
                </div>

                <div id="go-top">
                    <a className="smoothscroll" title="Back to Top" href="#top"><i className="fa fa-long-arrow-up"></i></a>
                </div>
            </div> {/* /row */}       
        </footer>
    );
}

export default Footer;
