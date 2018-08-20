import React, { Component } from 'react';
import Game from './Game'
import Score from './Score'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numCorrect: 0,
      numQuestions: 0
    }
  }

  calculateResult = (sum, proposedAnswer, userAnswer) => {
    const correctAnswer = sum === proposedAnswer
    this.setState((currentState) => ({
      numCorrect: (correctAnswer === userAnswer) ? currentState.numCorrect+1 : currentState.numCorrect,
      numQuestions: currentState.numQuestions+1
    }))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
		  <div>
    		<Game calculateResult={this.calculateResult}/>
    	  </div>
		  <Score 
			numCorrect={this.state.numCorrect}
			numQuestions={this.state.numQuestions}
		  />
        </div>
      </div>
    );
  }
}

export default App;
