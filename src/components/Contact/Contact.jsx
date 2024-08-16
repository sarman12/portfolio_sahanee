import React, { useState } from 'react';
import './Contact.css';
import { CgMail } from 'react-icons/cg';
import { BiLocationPlus } from 'react-icons/bi';
import { IoCall } from 'react-icons/io5';
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';

function Contact() {
    const [formData, setFormData] = useState({
        contactName: '',
        contactEmail: '',
        contactSubject: '',
        contactMessage: ''
    });

    const [formStatus, setFormStatus] = useState({
        loading: false,
        success: false,
        error: false,
    });

    


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormStatus({ loading: true, success: false, error: false });

        setTimeout(() => {
            setFormStatus({ loading: false, success: true, error: false });
            setFormData({
                contactName: '',
                contactEmail: '',
                contactSubject: '',
                contactMessage: ''
            });
        }, 2000);
    };

    return (
        <section id="contact">
            <div className="section-intro">
                <h2>Contact</h2>
                <h1>I'd Love To Hear From You.</h1>
                <p className="lead">
                    Let’s get in touch! Feel free to drop me a message.
                </p>
            </div>

            <div className="contact-form">
                <form name="contactForm" id="contactForm" onSubmit={handleSubmit}>
                    <fieldset>
                        <div className="form-field">
                            <input
                                name="contactName"
                                type="text"
                                id="contactName"
                                placeholder="Your Name"
                                value={formData.contactName}
                                onChange={handleChange}
                                minlength="2"
                                required
                            />
                        </div>
                        <div className="form-field">
                            <input
                                name="contactEmail"
                                type="email"
                                id="contactEmail"
                                placeholder="Your Email"
                                value={formData.contactEmail}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-field">
                            <input
                                name="contactSubject"
                                type="text"
                                id="contactSubject"
                                placeholder="Subject"
                                value={formData.contactSubject}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-field">
                            <textarea
                                name="contactMessage"
                                id="contactMessage"
                                placeholder="Your Message"
                                rows="10"
                                cols="50"
                                value={formData.contactMessage}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-field">
                            <button className="submitform" type="submit">
                                {formStatus.loading ? 'Sending...' : 'Submit'}
                            </button>
                        </div>
                    </fieldset>
                </form>

                {formStatus.error && (
                    <div id="message-warning">
                        <i className="fa fa-exclamation-triangle"></i> Something went wrong. Please try again.
                    </div>
                )}
                {formStatus.success && (
                    <div id="message-success">
                        <i className="fa fa-check"></i> Your message was sent, thank you!<br />
                    </div>
                )}
            </div>

            <div className="contact-info">
                <div className="info-box">
                    <div className="icon">
                        <BiLocationPlus/>
                    </div>
                    <h5>Where to find me</h5>
                    <p>DhanyaKuria,Basirhat<br />24 Parganas(N), West Bengal<br />743437, India</p>
                </div>
                <div className="info-box">
                    <div className="icon">
                        <CgMail/>
                    </div>
                    <h5>Email Me At</h5>
                    <p>sahaneearman601@gmail.com</p>
                    <p>armansahanee@gmail.com</p>
                </div>
                <div className="info-box">
                    <div className="icon">
                        <IoCall/>
                    </div>
                    <h5>Call Me At</h5>
                    <p>Phone: +91 6294354787</p>
                </div>
            </div>

            <div className="social-contact">
                    <ul className="footer-social">
                        <li><a href="https://github.com/sarman12"><BsGithub className='fa_contact'/></a></li>
                        <li><a href="https://www.linkedin.com/in/s-arman/"><BsLinkedin className='fa_contact'/></a></li>
                        <li><a href="https://twitter.com/sahanee33743"><BsTwitter  className='fa_contact'/></a></li>
                        <li><a href="https://www.instagram.com/web_wizard010/#"><BsInstagram className='fa_contact'/></a></li>
                    </ul>
                </div>
        </section>
    );
}

export default Contact;
