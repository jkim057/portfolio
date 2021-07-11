import React from 'react';

const BeerHere = ({show, buttonCheck}) => {
    // when project is selected, hide display class in removed
    // const classes = {
    //     // select RobotMan
    //     "0": "compCntr hideComp",
    //     // Select BeerHere
    //     "1": "compCntr",
    //     // Select ImageBoard
    //     "2": "compCntr hideComp",
    //     // Select FightGame
    //     "3": "compCntr hideComp",
    //     // Select About
    //     "4": "compCntr hideComp"
    // }

    function runGo(buttonCheck){
        if(buttonCheck === "BeerHere"){
            console.log("clugclug")
        }
    }

    return (
        // <div onClick={runGo} className={classes[show]}>
        <div onClick={runGo} className="compCntr">
            <h3 className="compTitle">Beer Here</h3>
            <img className="compImg" src="../img/beerHereImg.png" alt="BeerHere" />
            <a className="compLive" href="https://jok-beerhere.herokuapp.com/">Live Version</a>
            <a className="compGithub"href="https://github.com/jkim057/beerhere">Github</a>
            <p className="compDetails"> Beer Here is a React.js app I built with a open source API. I wrote about my thoughts below. </p>
            <a className="compMedium" href="https://joshkim057.medium.com/beer-here-a-straightforward-attempt-at-apis-and-react-js-30172301e5f8">Medium Article</a>
        </div>
    );
};

export default BeerHere;