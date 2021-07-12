import React,{ useState } from 'react';
import { Route, Link } from 'react-router-dom';
import { 
  RobotMan, 
  BeerHere,
  ImageBoard,
  FightGame,
  About
} from './components'

function App() {
 
  return (
    <div>
        <h1 className="mainTitle"> Joshua Kim - Portfolio</h1>
        <div id="projectList">
          <Link to="/robotman" className="pageBtn">
            <button className="pageLinks">RobotMan</button>
          </Link>

          <Link to="/beerhere" className="pageBtn">
            <button className="pageLinks">BeerHere</button>
          </Link>

          <Link to="/imageboard" className="pageBtn">
            <button className="pageLinks">ImageBoard</button>
          </Link>

          <Link to="/fightgame" className="pageBtn">
            <button className="pageLinks">FightGame</button>
          </Link>

          <Link to="/about" className="pageBtn">
            <button className="pageLinks">About</button>
          </Link>
        </div>
      <Route exact path="/robotman" component={RobotMan} />
      <Route exact path="/beerhere" component={BeerHere} />
      <Route exact path="/imageboard" component={ImageBoard} />
      <Route exact path="/fightgame" component={FightGame} />
      <Route exact path="/About" component={About} />
    <div id="landerText">
        <h2 > Welcome to Josh Kim's Portfolio</h2>
        <p> Please feel free to view the projects above or to click on the about page to learn more about Josh Kim.</p> 
    </div>

    </div>
  );
}

export default App;
