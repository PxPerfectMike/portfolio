import React, { useState } from 'react';
import Navbar from './Components/Navigation/Navbar';
import NavbarMobile from './Components/Navigation/NavbarMobile';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import GamePage from './Components/Game/GamePage';
import NamePlate from './Components/NamePlate';
import Home from './Components/Home';

function App() {
	const fullScreen = useMediaQuery('(min-width:600px)');
	const shortScreen = useMediaQuery('(max-height:950px)');
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
					margin: 0,
					padding: 0,
					backgroundColor: '#070606',
					border: '1vw solid #f5f5f5',
					boxShadow: 'inset 0 0 0 2px #f5f5f5',
				}}
			>
				<NamePlate />
				{pageIndex === 0 && <Home />}
				{pageIndex === 2 && <GamePage />}

				{/* {fullScreen ? (
					<Navbar navToApp={navToApp} />
				) : (
					<NavbarMobile mobileNavToApp={mobileNavToApp} />
				)} */}

				{fullScreen && !shortScreen && <Navbar navToApp={navToApp} />}
				{fullScreen && shortScreen && (
					<NavbarMobile mobileNavToApp={mobileNavToApp} />
				)}
				{!fullScreen && <NavbarMobile mobileNavToApp={mobileNavToApp} />}
			</Box>
		</>
	);
}

export default App;
