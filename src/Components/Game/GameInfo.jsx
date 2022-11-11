import React from 'react';

function GameInfo() {
	return (
		<div className='gameInfo'>
			<h1>Logic Dots</h1>
			<p>
				This is a game I made to showcase my skills in complex logic and
				rendering techniques. It uses conditional rendering to change the dots
				depending on the state of the game. The layout of the game is designed
				using css grid. The animations and interactivity are done with
				Framer-motion. If you cant beat the game right now don't worry, the game
				state is automatically saved to local storage.
			</p>
		</div>
	);
}

export default GameInfo;
