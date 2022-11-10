import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import NavbarMobile from './Components/NavbarMobile';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import GamePage from './Components/GamePage';

function App() {
	const matches = useMediaQuery('(min-width:600px)');
	const [pageIndex, setPageIndex] = useState(0);

	const mobileNavToApp = (pageIndex) => {
		setPageIndex(pageIndex);
	};

	const navToApp = (pageIndex) => {
		setPageIndex(pageIndex);
	};

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
				{pageIndex == 0 && console.log('Home Page')}
				{pageIndex == 1 && console.log('projects page')}
				{pageIndex == 2 && <GamePage />}
				{pageIndex == 3 && console.log('qualifications page')}
				{pageIndex == 4 && console.log('about me page')}
				{matches ? (
					<Navbar navToApp={navToApp} />
				) : (
					<NavbarMobile mobileNavToApp={mobileNavToApp} />
				)}
			</Box>
		</>
	);
}

export default App;
