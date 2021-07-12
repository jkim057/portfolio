import React from 'react';

const Robotman = () => {

    return (
        <div className="compCntr">
            <h3 className="compTitle"> Robot Man</h3>
            <img className="compImg" src="../img/robotManImg.png" alt="Robotman" />
            <a className="compLive" href="https://jkim057.github.io/RobotMan/">Live Version</a>
            <a className="compGithub"href="https://github.com/jkim057/RobotMan">Github</a>
            <p className="compDetails">Robotman is a frontend game I built with a few weeks of coding experience in Javascript and many hours of Googling. It's pretty rough around the edges, but seeing this result was the first time I felt confident that I was learning. </p>
        </div>
    );
};

export default Robotman;