import React, { useEffect, useState } from 'react';
import LocationCityRoundedIcon from '@mui/icons-material/LocationCityRounded';
import PrecisionManufacturingRoundedIcon from '@mui/icons-material/PrecisionManufacturingRounded';
import CasinoRoundedIcon from '@mui/icons-material/CasinoRounded';
import WorkRoundedIcon from '@mui/icons-material/WorkRounded';
import FaceRoundedIcon from '@mui/icons-material/FaceRounded';
import LunchDiningIcon from '@mui/icons-material/LunchDining';

import {
	Drawer,
	ListItemIcon,
	ListItemText,
	ListItemButton,
	Button,
} from '@mui/material';

const data = [
	{
		name: 'Home',
		icon: <LocationCityRoundedIcon />,
	},
	{ name: 'Projects', icon: <PrecisionManufacturingRoundedIcon /> },
	{ name: 'Logic Dots', icon: <CasinoRoundedIcon /> },
	{ name: 'Qualifications', icon: <WorkRoundedIcon /> },
	{ name: 'About Me', icon: <FaceRoundedIcon /> },
];

function Navbar() {
	const [open, setOpen] = useState(false);

	const getList = () => (
		<div
			style={{ width: 250 }}
			onClick={() =>
				setTimeout(() => {
					setOpen(false);
				}, 247) && clearTimeout()
			}
		>
			{data.map((item, index) => (
				<ListItemButton
					TouchRippleProps={{
						sx: {
							color: '#f5f5f5',
							borderTopRightRadius: '999px',
							borderBottomRightRadius: '999px',
							maxWidth: '42vw',
						},
					}}
					key={index}
				>
					<ListItemIcon sx={{ color: '#f5f5f5', minWidth: '32px' }}>
						{item.icon}
					</ListItemIcon>
					<ListItemText primary={item.name} />
				</ListItemButton>
			))}
		</div>
	);

	return (
		<>
			<Button
				sx={{
					color: 'white',
					position: 'fixed',
					top: 12,
					left: 12,
					minWidth: 0,
					borderRadius: '50%',
				}}
				onClick={() => setOpen(true)}
			>
				{<LunchDiningIcon />}
			</Button>
			<Drawer
				PaperProps={{
					sx: {
						marginTop: '5vh',
						width: '100vw',
						height: 260,
						color: '#fff',
						backgroundColor: 'transparent',
					},
				}}
				variant='temporary'
				open={open}
				anchor={'left'}
				onClose={() => setOpen(false)}
			>
				{getList()}
			</Drawer>
		</>
	);
}

export default Navbar;
