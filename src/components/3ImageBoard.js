import React from 'react';

const ImageBoard = () => {
    return (
        <div className="compCntr">
            <h3 className="compTitle">Image Board</h3>
            <img className="compImg" src="../img/imageBoardImg.png" alt="ImageBoard" />
            <a className="compLive" href="https://hatcrew.herokuapp.com/signin">Live Version</a>
            <a className="compGithub"href="https://github.com/Project3-GA">Github</a>
            <p className="compDetails"> Image Board is a full stack app I built with a group that has authenication and full CRUD capability. </p>
        </div>
    );
};

export default ImageBoard;