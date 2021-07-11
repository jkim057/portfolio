import React from 'react';

const ImageBoard = ({show, buttonCheck}) => {
    // when project is selected, hide display class in removed
    // const classes = {
    //     // select RobotMan
    //     "0": "compCntr hideComp",
    //     // Select BeerHere
    //     "1": "compCntr hideComp",
    //     // Select ImageBoard
    //     "2": "compCntr",
    //     // Select FightGame
    //     "3": "compCntr hideComp",
    //     // Select About
    //     "4": "compCntr hideComp"
    // }

    function runGo(buttonCheck){
        if(buttonCheck === "ImageBoard"){
            console.log("click click")
        }
    }

    return (
        // <div onClick={handleClick} className={classes[show]}>
        <div onClick={runGo} className="compCntr">
            <h3 className="compTitle">Image Board</h3>
            <img className="compImg" src="../img/imageBoardImg.png" alt="ImageBoard" />
            <a className="compLive" href="https://hatcrew.herokuapp.com/signin">Live Version</a>
            <a className="compGithub"href="https://github.com/Project3-GA">Github</a>
            <p className="compDetails"> Image Board is a full stack app I built with a group that has authenication and full CRUD capability. </p>
        </div>
    );
};

export default ImageBoard;