import React,{ useState } from 'react';
import { 
  RobotMan, 
  BeerHere,
  ImageBoard,
  FightGame,
  About
} from './components'
import './App.css';

function App() {
  const [show, setShow] = useState(false)
// when the project name is clicked, the specific page will show up.

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
