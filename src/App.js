import React, { useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import GamePage from './Components/Game/GamePage';

function App() {
	const pageRendered = 0;

	return <>{pageRendered === 0 && <GamePage />}</>;
}

export default App;
