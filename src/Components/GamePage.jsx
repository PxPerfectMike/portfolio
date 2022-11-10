import React from 'react';
import Game from './Game';
import GameInfo from './GameInfo';
import { motion } from 'framer-motion';

function GamePage() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ ease: 'anticipate', duration: 0.3 }}
		>
			<GameInfo />
			<Game />
		</motion.div>
	);
}

export default GamePage;
