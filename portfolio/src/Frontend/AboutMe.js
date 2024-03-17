import React from 'react';

const AboutMe = () => {
    return (
        <div className=''>
            <h2 className="header" >About Me</h2>
            <p> I am Kim, a 23-year-old IT engineering  student from Savonia University of Applied Sciences. </p>
            <p>   I have completed three years of my studies and, according to my schedule, I will graduate in the spring </p>
            <p>     or autumn of 2024, depending on the progress of my thesis.</p>
            <p className = "meColumn">
                <br />
                You can find more detailed information about me on my 
                <a href="https://www.linkedin.com/in/kimlof/" target="_blank" rel="noopener noreferrer"> LinkedIn profile</a>.
            </p>
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
                From the dropdown menu in the top corner of the page, you can find a selection of applications and games 
                I've worked on.</p>
                <p> I strive to add new projects regularly, so you can follow my progress and learning.
            </p>
        </div>
    );
};

export default AboutMe;