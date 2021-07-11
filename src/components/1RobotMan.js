import React from 'react';

const Robotman = ({show, buttonCheck}) => {
    // when project is selected, hide display class in removed
    // const classes = {
    //     // select RobotMan
    //     "0": "compCntr",
    //     // Select BeerHere
    //     "1": "compCntr hideComp",
    //     // Select ImageBoard
    //     "2": "compCntr hideComp",
    //     // Select FightGame
    //     "3": "compCntr hideComp",
    //     // Select About
    //     "4": "compCntr hideComp"
    // }

    // className={classes[active]}

    function runGo(buttonCheck){
        if(buttonCheck === "RobotMan"){
            console.log("yessir Robot Man")
        }
    }



    return (
        <div onClick={runGo} className="compCntr">
        {/* <div onClick={handleClick} className={classes[show]}></div> */}
            <h3 className="compTitle"> Robot Man</h3>
            <img className="compImg" src="../img/robotManImg.png" alt="Robotman" />
            <a className="compLive" href="https://jkim057.github.io/RobotMan/">Live Version</a>
            <a className="compGithub"href="https://github.com/jkim057/RobotMan">Github</a>
            <p className="compDetails">Robotman is a frontend game I built with a few weeks of coding experience in Javascript and many hours of Googling. It's pretty rough around the edges, but seeing this result was the first time I felt confident that I was learning. </p>
        </div>
    );
};

export default Robotman;