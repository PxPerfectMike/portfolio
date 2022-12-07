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
			<div></div>
		</>
	);
}

export default App;
