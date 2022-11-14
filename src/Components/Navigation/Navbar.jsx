import React, { useState } from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import LocationCityRoundedIcon from '@mui/icons-material/LocationCityRounded';
import CasinoRoundedIcon from '@mui/icons-material/CasinoRounded';

function Navbar({ navToApp }) {
	const [value, setValue] = useState(0);

	return (
		<BottomNavigation
			showLabels
			value={value}
			onChange={(event, newValue) => {
				setValue(newValue);
			}}
			sx={{
				justifyContent: 'space-evenly',
				position: 'fixed',
				bottom: '10vh',
				left: '9%',
				width: '80vw',
				backgroundColor: 'transparent',
				margin: 'auto',
				border: '1px solid #f5f5f5',
				boxShadow: '0 0px 4px 5px #f5f5f5',
				height: '8vh',
			}}
		>
			<BottomNavigationAction
				sx={{
					color: 'white',
					fontFamily: 'Roboto',
					backgroundColor: 'transparent',
					borderRadius: '999px',
					transition: 'all 0.3s ease-in-out',
					padding: '1vw 0',
					'&.Mui-selected': {
						marginBottom: '1vw',
						color: 'gold',
						padding: '2vw 0',
					},
				}}
				onClick={() => {
					navToApp(0);
				}}
				label='Home'
				icon={<LocationCityRoundedIcon />}
			/>
			<BottomNavigationAction
				sx={{
					color: 'white',
					fontFamily: 'Roboto',
					backgroundColor: 'transparent',
					borderRadius: '999px',
					transition: 'all 0.3s ease-in-out',
					padding: '1vw 0',
					'&.Mui-selected': {
						marginBottom: '1vw',
						color: 'gold',
						padding: '2vw 0',
					},
				}}
				onClick={() => navToApp(2)}
				label='Logic Dots Game'
				icon={<CasinoRoundedIcon />}
			/>
		</BottomNavigation>
	);
}

export default Navbar;
