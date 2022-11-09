import React from 'react';
import Navbar from './Components/Navbar';
import Box from '@mui/material/Box';
import NavbarMobile from './Components/NavbarMobile';
import useMediaQuery from '@mui/material/useMediaQuery';
import GamePage from './Components/GamePage';

function App() {
	const matches = useMediaQuery('(min-width:600px)');
	return (
		<>
			<Box
				sx={{
					width: '100vw',
					height: '100vh',
					backgroundColor: '#070606',
					border: '2vw solid #070606',
					boxShadow: 'inset 0 0 0 1px #f5f5f5',
				}}
			>
				<GamePage />
				{matches ? <Navbar /> : <NavbarMobile />}
			</Box>
		</>
	);
}

export default App;
