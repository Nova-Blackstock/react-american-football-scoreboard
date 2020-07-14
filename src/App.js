//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import BottomRow from "./BottomRow";
import "./App.css";
import { render } from "react-dom";

function ScoreBoard (props) {
  return (
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">{props.homeTeamName}</h2>
            <div className="home__score">{props.homeScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">{props.awayTeamName}</h2>
            <div className="away__score">{props.awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
  )
}

function FootballPlayResult (props) {
   const homeScore = props.homeScore
   const awayScore = props.awayScore
   const setHomeScore = props.setHomeScore
   const setAwayScore = props.setAwayScore

  const playFootBall = e =>{
    const result = e.target.textContent
    if(result === 'Home Touchdown'){
      setHomeScore(homeScore + 7)
    }else if(result === 'Home Field Goal'){
      setHomeScore(homeScore + 3)
    }else if(result === 'Away Touchdown'){
      setAwayScore(awayScore + 7)
    }else if(result === 'Away Field Goal'){
      setAwayScore(awayScore +3)
    }else{
      return null
    }
  }
  return (
      <section className="buttons">
        <div className="homeButtons" onClick={playFootBall}>
          <button className="homeButtons__touchdown">Home Touchdown</button>
          <button className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="awayButtons" onClick={playFootBall}>
          <button className="awayButtons__touchdown">Away Touchdown</button>
          <button className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
      </section>
    )
}

function IWantToPlayAGame(props){
  const [lionsScore, setLionsScore] = useState(32)
  const [tigersScore, setTigersScore] = useState(32)
  
  //const teamSetUp = (team, score) =>{
 //   const [team, setScore] = useState(score)
 // }
  return (
    <div className= 'container'>
      <ScoreBoard homeTeamName='Lions' awayTeamName= 'Tigers' homeScore= {lionsScore} awayScore= {tigersScore} />
      <FootballPlayResult homeScore= {lionsScore} awayScore= {tigersScore} setHomeScore= {setLionsScore} setAwayScore= {setTigersScore} />
    </div>
  )
}

export default IWantToPlayAGame;
