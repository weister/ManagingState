import React from 'react';

const Score = props => {
  const {numCorrect, numQuestions} = props;
  return (
    <div>
      <p className="text">
     	Your Score: {numCorrect}/{numQuestions}
 	  </p>
	</div>
  );
}

export default Score;
