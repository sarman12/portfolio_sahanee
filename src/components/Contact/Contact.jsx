import React, { useState } from 'react';
import './Contact.css';
import { CgMail } from 'react-icons/cg';
import { BiLocationPlus } from 'react-icons/bi';
import { IoCall } from 'react-icons/io5';
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';

function Contact({ state: dark }) {
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
        <section id="contact" className={dark ? 'dark-mode' : ''}>
            <div className="section-intro">
                <h2 style={{ color: dark ? '#F1EFE2' : '' }}>Contact</h2>
                <h1 style={{ color: dark ? '#F1EFE2' : '' }}>I'd Love To Hear From You.</h1>
                <p className="lead" style={{ color: dark ? '#F1EFE2' : 'black' }}>
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
                                minLength="2"
                                required
                                // style={{ backgroundColor: dark ? 'transparent' : 'transparent', color: dark ? 'white' : 'black' }}
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
                                // style={{ backgroundColor: dark ? 'transparent' : 'transparent', color: dark ? 'white' : 'black' }}
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
                                // style={{ backgroundColor: dark ? '#333' : '#fff', color: dark ? 'white' : 'black' }}
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
                                // style={{ backgroundColor: dark ? '#333' : '#fff', color: dark ? 'white' : 'black' }}
                            />
                        </div>
                        <div className="form-field">
                            <button

                                className={ dark? 'submitform_dark':'submitform'}
                                type="submit"
                            >
                                {formStatus.loading ? 'Sending...' : 'Submit'}
                            </button>
                        </div>
                    </fieldset>
                </form>

                {formStatus.error && (
                    <div id="message-warning" style={{ color: dark ? 'red' : 'black' }}>
                        <i className="fa fa-exclamation-triangle"></i> Something went wrong. Please try again.
                    </div>
                )}
                {formStatus.success && (
                    <div id="message-success" style={{ color: dark ? 'green' : 'black' }}>
                        <i className="fa fa-check"></i> Your message was sent, thank you!<br />
                    </div>
                )}
            </div>

            <div className="contact-info">
                <div className="info-box">
                    <div className="icon">
                        <BiLocationPlus style={{ color: dark ? '#F1EFE2' : 'black' }} />
                    </div>
                    <h5 style={{ color: dark ? '#F1EFE2' : 'black' }}>Where to find me</h5>
                    <p style={{ color: dark ? '#F1EFE2' : 'black' }}>DhanyaKuria,Basirhat<br />24 Parganas(N), West Bengal<br />743437, India</p>
                </div>
                <div className="info-box">
                    <div className="icon">
                        <CgMail style={{ color: dark ? '#F1EFE2' : 'black' }} />
                    </div>
                    <h5 style={{ color: dark ? '#F1EFE2' : 'black' }}>Email Me At</h5>
                    <p style={{ color: dark ? '#F1EFE2' : 'black' }}>sahaneearman601@gmail.com</p>
                    <p style={{ color: dark ? '#F1EFE2' : 'black' }}>armansahanee@gmail.com</p>
                </div>
                <div className="info-box">
                    <div className="icon">
                        <IoCall style={{ color: dark ? '#F1EFE2' : 'black' }} />
                    </div>
                    <h5 style={{ color: dark ? '#F1EFE2' : 'black' }}>Call Me At</h5>
                    <p style={{ color: dark ? '#F1EFE2' : 'black' }}>Phone: +91 6294354787</p>
                </div>
            </div>
        </section>
    );
}

export default Contact;
