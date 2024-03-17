import React, { useState } from 'react';
import '../css/ContactMe.css';

const ContactMe = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your logic here to handle form submission
        console.log('Form submitted!');
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);
    };

    return (
        <div className='contactMe'>
            <h2>Contact Me</h2>
            <p>Feel free to send me a message!</p>
            <p>If you have any questions or feedback, I would love to hear from you.</p>
            <h3>Contact info</h3>
            <p> You can reach me via email at <a href="mailto:kim@kimcode.fi"> kim@kimcode.fi</a>.</p>
            <p>You can also find me on <a href="https://www.linkedin.com/in/kimlof/" target="_blank" rel="noopener noreferrer">LinkedIn</a>.</p>

        </div>
    );
};

export default ContactMe;