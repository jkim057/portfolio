import React from 'react';
import { 
  RobotMan, 
  BeerHere,
  ImageBoard,
  FightGame,
  About
} from './components'
// useState
import './App.css';

function App() {
  return (
    <div className="App">
     <h1 className="mainTitle"> Joshua Kim - Portfolio</h1>
     <About />
     <RobotMan />
     <BeerHere />
     <ImageBoard />
     <FightGame />

    </div>
  );
}

export default App;
