import React from 'react';

const About = () => {
    // when project is selected, hide display class in removed
    const classes = {
        // select RobotMan
        "0": "compCntr hideComp",
        // Select BeerHere
        "1": "compCntr hideComp",
        // Select ImageBoard
        "2": "compCntr hideComp",
        // Select FightGame
        "3": "compCntr hideComp",
        // Select About
        "4": "compCntr"
    }
    return (
        <div className="aboutMeCntr">
            <div className="introCntr">
                <p className="introTitle"> About Me: </p>
                <p className="introDetails">I am a New York-based creative who dove into software engineering after exploring the galleries of fine art and the seas of logistics. Please feel free to explore my projects here.</p>
            </div>
            
            <div className="contactCntr">
                <p className="contactTitle"> Contact:</p>
                <a className="contactDetails" target="_blank" href="https://github.com/jkim057"> Github</a>
                <a className="contactDetails" target="_blank" href="https://www.linkedin.com/in/josh-kim-dev">LinkedIn</a>
                <a className="contactDetails" target="_blank" href="joshkim057@gmail.com">joshkim057@gmail.com</a>

            </div>
            
        </div>
    );
};

export default About;