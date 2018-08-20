import React, { Component } from 'react';

class Game extends Component {
  constructor(props) {
    super(props);
    const gameData = this.makeNewGame();
    this.state = {
      value1: gameData[0],
      value2: gameData[1],
      value3: gameData[2],
      proposedAnswer: gameData[3]
    }
    this.sum = gameData[0] + gameData[1] + gameData[2];
  }
  
  actionHandler = (userAnswer) => {
    const newGameData = this.makeNewGame();
    this.setState(currentState => ({
      value1: newGameData[0],
      value2: newGameData[1],
      value3: newGameData[2],
      proposedAnswer: newGameData[3]      
    }));
    this.props.calculateResult(this.sum, this.state.proposedAnswer, userAnswer);
  }
  
  makeNewGame = () => {
    const value1 = Math.floor(Math.random() * 100);
    const value2 = Math.floor(Math.random() * 100);
    const value3 = Math.floor(Math.random() * 100);
    const proposedAnswer = Math.floor(Math.random() * 3) + (value1 + value2 + value3);
    return [value1, value2, value3, proposedAnswer];
  }
 
  render() {
	console.log("*", this.sum);
	console.log("*", this.state.proposedAnswer);
    return (
      <div className="Game">
      	<div className="equation">
      	  <p className="text">{`${this.state.value1} + ${this.state.value2} + ${this.state.value3} = ${this.state.proposedAnswer}`}</p>
		</div>
        <button onClick={() => this.actionHandler(true)} >True</button>
        <button onClick={() => this.actionHandler(false)} >False</button>
	  </div>
    );
  }
}

export default Game;
