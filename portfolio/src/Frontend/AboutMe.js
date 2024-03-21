import React from 'react';
import '../css/AboutMe.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faJs } from '@fortawesome/free-brands-svg-icons'
import { faHtml5 } from '@fortawesome/free-brands-svg-icons'
import { faCss3 } from '@fortawesome/free-brands-svg-icons'
import { faRust } from '@fortawesome/free-brands-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import { faPython } from '@fortawesome/free-brands-svg-icons'
import { faJava } from '@fortawesome/free-brands-svg-icons'
import { faC } from '@fortawesome/free-solid-svg-icons'
import { faNode } from '@fortawesome/free-brands-svg-icons'


const AboutMe = () => {
    return (
        <div className="AboutMeContainer">
            <h2  >About Me</h2>
            <p> I am Kim, a 23-year-old IT engineering  student from Savonia University of Applied Sciences. </p>
            <p>   I have completed three years of my studies and, according to my schedule, I will graduate in the spring </p>
            <p>     or autumn of 2024, depending on the progress of my thesis.</p>
            <p className = "meColumn">
                <br />
                You can find more detailed information about me on my 
                <a href="https://www.linkedin.com/in/kimlof/" target="_blank" rel="noopener noreferrer"> LinkedIn profile</a>.
            </p>
            <h2 >My mostly used technologies</h2>
            <div className='aboutMe-list-container'>
            <ul className='first-list'>
                <li><a href="https://www.w3schools.com/react/react_intro.asp" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faReact} /> React</a></li>
                <li><a href="https://www.w3schools.com/js/js_intro.asp" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faJs} /> JavaScript</a></li>
                <li><a href="https://www.w3schools.com/html/html_intro.asp" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faHtml5} /> HTML</a></li>
                <li><a href="https://www.w3schools.com/css/css_intro.asp" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faCss3} /> CSS</a></li>
                <li><a href="https://www.w3schools.com/nodejs/nodejs_intro.asp" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faNode} /> Node.js</a></li>
            </ul>
            <ul className='second-list'>
            <li> <a href="https://www.w3schools.com/java/java_intro.asp" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faJava} /> Java</a></li>
                <li> <a href="https://www.w3schools.com/cs/cs_intro.php" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faC} /> C#</a></li>
                <li><a href="https://www.w3schools.com/python/python_intro.asp" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faPython} /> Python</a></li>
            </ul>
            <ul className='third-list'>
            <li> <a href="https://www.mysql.com/" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faDatabase} /> MySQL</a></li>
                <li><a href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faDatabase} /> MongoDB</a></li>
            </ul>
            </div>
            <h2>About This Site</h2>
<p>This site serves as a portfolio showcasing my projects and introducing myself.</p>
<p>It is crafted using React for dynamic functionality and styled with CSS for layout design.</p>
<p>This is a single-page application, enabling seamless navigation between sections without page reloads.</p>
<p class="meColumn">
    Explore my code repository on 
    <a href="https://github.com/KimLof" target="_blank" rel="noopener noreferrer">GitHub</a>, 
    providing an overview of my projects and demonstrating my coding proficiency.
</p>
<p>
    You can return to the main page by pressing F5 or clicking the "K" logo.
</p>
<p>
    I am committed to continually adding new projects, allowing you to track my progress and learning journey.
</p>

        </div>
    );
};

export default AboutMe;