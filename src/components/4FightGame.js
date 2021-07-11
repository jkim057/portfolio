import React from 'react';

const FightGame = ({show, buttonCheck}) => {
    // when project is selected, hide display class in removed
    // const classes = {
    //     // select RobotMan
    //     "0": "compCntr hideComp",
    //     // Select BeerHere
    //     "1": "compCntr hideComp",
    //     // Select ImageBoard
    //     "2": "compCntr hideComp",
    //     // Select FightGame
    //     "3": "compCntr",
    //     // Select About
    //     "4": "compCntr hideComp"
    // }

    function runGo(buttonCheck){
        if(buttonCheck === "FightGame"){
            console.log("stab stab")
        }
    }

    return (
        // <div onClick={handleClick} className={classes[show]}>
        <div onClick={runGo} className="compCntr">
            <h3 className="compTitle">Fight Game</h3>
            <img className="compImg" src="../img/fightGameImg.png" alt="FightGame" />
            <a className="compLive" href="https://fight-game-front.herokuapp.com/">Live Version</a>
            <a className="compGithub"href="https://github.com/jkim057/fightgame-front">Github</a>
            <p className="compDetails"> Fight Game is a game I built with React.js. The whole thought progress was a trip and a half. I wrote about my thoughts below. </p>
            <a className="compMedium" href="https://joshkim057.medium.com/fight-game-or-how-i-took-my-emotions-and-made-something-useful-204542c0cff6">Medium Article</a>
        </div>
    );
};

export default FightGame;