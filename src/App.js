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
  const [show, setShow] = useState()
  // when the project name is clicked, the specific page will show up.

  // Because theres no backend or api to pull information from, I can't just map fetch request results to display. I guess I need to change view class based off of click?
  
  // function handleClick(event){
  //   console.log("hi")
  //   setShow(event.target.id)

  // }

  function buttonCheck(event){
    event.preventDefault()
    // console.log(event)
    setShow(event.target.outerText)
    console.log(show)
  }


  return (
    <div className="framework">
     <h1 className="mainTitle"> Joshua Kim - Portfolio</h1>

     <ul id="projectList">
       <li onClick={buttonCheck} className="liBtns">RobotMan</li>
       <li onClick={buttonCheck} className="liBtns">BeerHere</li>
       <li onClick={buttonCheck} className="liBtns">ImageBoard</li>
       <li onClick={buttonCheck} className="liBtns">FightGame</li>
     </ul>

     <div className="dropdown">
      <button className="dropbtn">Projects</button>
        <div className="dropdown-content projectList">
          <a className="liBtns" href="#">RobotMan</a>
          <a className="liBtns" href="#">BeerHere</a>
          <a className="liBtns" href="#">ImageBoard</a>
          <a className="liBtns" href="#">FightGame</a>
        </div>
    </div>




     <p className="hideComp"> ARE YOU WIZARD</p>
     {/* hideComp class only works on individual elements, they're not hiding the entire component. need another way to do this. */}

     <RobotMan 
        show={show}

        buttonCheck={buttonCheck}
        />
     <BeerHere
        show={show}

        buttonCheck={buttonCheck}
        />
     <ImageBoard        
        show={show}

        buttonCheck={buttonCheck} 
        />
     <FightGame 
        show={show}

        buttonCheck={buttonCheck} 
        />
     <About
        show={show}

        buttonCheck={buttonCheck}
     />

    </div>
  );
}

export default App;
