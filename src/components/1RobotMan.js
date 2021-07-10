import React from 'react';

const Robotman = () => {
    return (
        <div className="robotCntr">
            <h3 className="robotTitle"> Robot Man</h3>
            <img className="robotImg" src="../img/robotManImg.png" alt="Robotman Image" />
            <a className="robotLive" href="https://jkim057.github.io/RobotMan/">Live Version</a>
            <a className="robotGithub"href="https://github.com/jkim057/RobotMan">Github</a>
            <p className="robotDetails">Robotman is a frontend game I built with a few weeks of coding experience in Javascript and many hours of Googling. It's pretty rough around the edges, but seeing this result was the first time I felt confident that I was learning. </p>
        </div>
    );
};

export default Robotman;