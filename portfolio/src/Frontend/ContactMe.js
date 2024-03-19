import React, { useState } from 'react';
import '../css/ContactMe.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


const ContactMe = () => {
    return (
        <div className='contactMe'>
            <h2>Contact Me</h2>
            <p>Feel free to send me a message!</p>
            <p>If you have any questions or feedback, I would love to hear from you.</p>
            <h2>Contact info</h2>
            <p> You can reach me via email at <a href="mailto:kim@kimcode.fi"> kim@kimcode.fi</a>.</p>
            <p>You can also find me on <a href="https://www.linkedin.com/in/kimlof/" target="_blank" rel="noopener noreferrer">LinkedIn</a>.</p>
            <div className='contact-me-links'>
                <a href="mailto:kim@kimcode.fi" target="_blank"><FontAwesomeIcon icon={faEnvelope} /></a>
                <a href="https://www.linkedin.com/in/kimlof/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
                <a href="https://github.com/KimLof" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
                </div>
        </div>
            
    );
};

export default ContactMe;