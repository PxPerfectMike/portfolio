import React, { useState } from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import LocationCityRoundedIcon from '@mui/icons-material/LocationCityRounded';
import PrecisionManufacturingRoundedIcon from '@mui/icons-material/PrecisionManufacturingRounded';
import CasinoRoundedIcon from '@mui/icons-material/CasinoRounded';
import WorkRoundedIcon from '@mui/icons-material/WorkRounded';
import FaceRoundedIcon from '@mui/icons-material/FaceRounded';

function Navbar() {
	const [value, setValue] = useState(0);
	return (
		<>
			<BottomNavigation
				showLabels
				value={value}
				onChange={(event, newValue) => {
					setValue(newValue);
				}}
				sx={{
					justifyContent: 'space-evenly',
					position: 'fixed',
					bottom: '2vw',
					width: '96vw',
					backgroundColor: 'transparent',
				}}
			>
				<BottomNavigationAction
					sx={{
						color: 'white',
						width: '20vw',
						fontFamily: 'Roboto',
						backgroundColor: 'transparent',
						borderRadius: '999px',
						transition: 'all 0.3s ease-in-out',
						padding: '1vw',
						'&.Mui-selected': {
							marginBottom: '1vw',
							color: 'gold',
							padding: '1.5vw',
						},
					}}
					label='Home'
					icon={<LocationCityRoundedIcon />}
				/>
				<BottomNavigationAction
					sx={{
						color: 'white',
						width: '20vw',
						fontFamily: 'Roboto',
						backgroundColor: 'transparent',
						borderRadius: '999px',
						transition: 'all 0.3s ease-in-out',
						padding: '1vw',
						'&.Mui-selected': {
							marginBottom: '1vw',
							color: 'gold',
							padding: '1.5vw',
						},
					}}
					label='Projects'
					icon={<PrecisionManufacturingRoundedIcon />}
				/>
				<BottomNavigationAction
					sx={{
						color: 'white',
						width: '20vw',
						fontFamily: 'Roboto',
						backgroundColor: 'transparent',
						borderRadius: '999px',
						transition: 'all 0.3s ease-in-out',
						padding: '1vw',
						'&.Mui-selected': {
							marginBottom: '1vw',
							color: 'gold',
							padding: '1.5vw',
						},
					}}
					label='Logic Dots'
					icon={<CasinoRoundedIcon />}
				/>
				<BottomNavigationAction
					sx={{
						color: 'white',
						width: '20vw',
						fontFamily: 'Roboto',
						backgroundColor: 'transparent',
						borderRadius: '999px',
						transition: 'all 0.3s ease-in-out',
						padding: '1vw',
						'&.Mui-selected': {
							marginBottom: '1vw',
							color: 'gold',
							padding: '1.5vw',
						},
					}}
					label='Qualifications'
					icon={<WorkRoundedIcon />}
				/>
				<BottomNavigationAction
					sx={{
						color: 'white',
						width: '20vw',
						fontFamily: 'Roboto',
						backgroundColor: 'transparent',
						borderRadius: '999px',
						transition: 'all 0.3s ease-in-out',
						padding: '1vw',
						'&.Mui-selected': {
							marginBottom: '1vw',
							color: 'gold',
							padding: '1.5vw',
						},
					}}
					label='About Me'
					icon={<FaceRoundedIcon />}
				/>
			</BottomNavigation>
		</>
	);
}

export default Navbar;