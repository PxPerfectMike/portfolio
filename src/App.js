import React from 'react';
import Navbar from './Components/Navbar';
import Box from '@mui/material/Box';
import NavbarMobile from './Components/NavbarMobile';
import useMediaQuery from '@mui/material/useMediaQuery';
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
				{matches ? <Navbar /> : <NavbarMobile />}
			</Box>
		</>
	);
}

export default App;
