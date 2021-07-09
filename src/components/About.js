import React from 'react';

const About = () => {
    return (
        <div className="aboutMeCntr">
            <div className="introCntr">
                <p className="introTitle"> About Me: </p>
                <p className="introDetails"> A New York based creative who dove into software engineering after exploring the galleries of fine art and the seas of logistics. Please feel free to explore my projects here.</p>
            </div>
            <div className="contactCntr">
                <p className="contactTitle"> Contact:</p>
                <a className="contactDetails" href="https://github.com/jkim057"> Github</a>
                <a className="contactDetails" href="https://www.linkedin.com/in/josh-kim-dev">LinkedIn</a>
                <a className="contactDetails" href="joshkim057@gmail.com">e-Mail</a>
            </div>
            
            
        </div>
    );
};

export default About;