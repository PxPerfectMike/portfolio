import React from 'react';
import { motion } from 'framer-motion';
import Grid from '@mui/material/Grid';

function NamePlate() {
	return (
		<>
			<Grid
				container
				sx={{ position: 'absolute', width: '25vw', top: '-2vh', left: '24vw' }}
			>
				<Grid item xs={11} sm={11} md={11} lg={11.5}>
					<motion.div className='namePlate'>
						<h1 className='name'>Michael Baker</h1>
					</motion.div>
				</Grid>
			</Grid>
		</>
	);
}

export default NamePlate;
