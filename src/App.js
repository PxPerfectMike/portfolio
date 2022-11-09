import React, { useState } from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
function App() {
	const [value, setValue] = useState(0);

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
						width: '98vw',
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
						label='Recents'
						icon={<RestoreIcon />}
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
						label='Favorites'
						icon={<FavoriteIcon />}
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
						label='Nearby'
						icon={<LocationOnIcon />}
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
						label='Nearby'
						icon={<LocationOnIcon />}
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
						label='Nearby'
						icon={<LocationOnIcon />}
					/>
				</BottomNavigation>
			</Box>
		</>
	);
}

export default App;
