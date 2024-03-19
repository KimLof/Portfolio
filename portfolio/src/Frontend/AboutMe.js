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
            <h2 className="header" >About Me</h2>
            <p> I am Kim, a 23-year-old IT engineering  student from Savonia University of Applied Sciences. </p>
            <p>   I have completed three years of my studies and, according to my schedule, I will graduate in the spring </p>
            <p>     or autumn of 2024, depending on the progress of my thesis.</p>
            <p className = "meColumn">
                <br />
                You can find more detailed information about me on my 
                <a href="https://www.linkedin.com/in/kimlof/" target="_blank" rel="noopener noreferrer"> LinkedIn profile</a>.
            </p>
            <h2 className='header'>My mostly used technologies</h2>
            <div className='aboutMe-list-container'>
            <ul className='first-list'>
                <li><FontAwesomeIcon icon={faReact} /> React</li>
                <li><FontAwesomeIcon icon={faJs} /> JavaScript</li>
                <li><FontAwesomeIcon icon={faHtml5} /> HTML</li>
                <li><FontAwesomeIcon icon={faCss3} /> CSS</li>
                <li> <FontAwesomeIcon icon={faNode} /> Node</li>
            </ul>
            <ul className='second-list'>
            <li> <FontAwesomeIcon icon={faJava} /> Java</li>
                <li> <FontAwesomeIcon icon={faC} /> C#</li>
                <li><FontAwesomeIcon icon={faPython} /> Python</li>
            </ul>
            <ul className='third-list'>
            <li> <FontAwesomeIcon icon={faDatabase} /> MySQL</li>
                <li><FontAwesomeIcon icon={faDatabase} /> MongoDB</li>
            </ul>
            </div>
            <h2 className="header" >About This Site</h2>
            <p>
                This site has been created as a project showcase and a practice area for new skills that I learn along 
                the way.  </p>
                <p> It is built using React and the site's layout is designed with CSS.  </p>
                <p className = "meColumn">
                You can explore my code on 
                <a href="https://github.com/KimLof" target="_blank" rel="noopener noreferrer"> GitHub</a>. 
                It provides an overview of my projects and gives an example of my coding abilities.
            </p>
            <p>
                You can return to main page by pressing F5 or clicking "K" logo.</p>
                <p> I strive to add new projects regularly, so you can follow my progress and learning.
            </p>
        </div>
    );
};

export default AboutMe;