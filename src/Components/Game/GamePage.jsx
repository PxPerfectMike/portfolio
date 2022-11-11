import React from 'react';
import Game from './Game';
import GameInfo from './GameInfo';
import { motion } from 'framer-motion';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';

function GamePage() {
	const pc = useMediaQuery('(min-width:1100px)');
	const medium = useMediaQuery('(min-width:850px) and (max-width:1100px)');
	const tablet = useMediaQuery('(min-width:600px) and (max-width:850px)');
	const mobile = useMediaQuery('(max-width:600px)');
	return (
		<>
			{pc && (
				<Grid
					className='wrapper'
					container
					sx={{
						position: 'absolute',
						top: '20vh',
						left: 0,
						justifyContent: 'center',
					}}
				>
					<Grid item xs={5}>
						<motion.div
							className='gameInfoDiv'
							style={{
								textAlign: 'center',
							}}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ ease: 'anticipate', duration: 0.3 }}
						>
							<GameInfo />
						</motion.div>
					</Grid>
					<Grid item xs={5} sx={{ margin: 'auto 0 auto 0' }}>
						<motion.div
							style={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								gap: '1rem',
							}}
							className='gameDiv'
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ ease: 'anticipate', duration: 0.3 }}
						>
							<Game />
						</motion.div>
					</Grid>
				</Grid>
			)}
			{medium && (
				<Grid
					container
					sx={{ height: '100%', alignItems: 'center', margin: 0 }}
				>
					<Grid container sx={{ justifyContent: 'space-around' }}>
						<Grid item xs={5} sx={{ margin: 'auto 0 auto 0' }}>
							<motion.div
								style={{
									display: 'flex',
									flexDirection: 'column',
									alignItems: 'center',
									gap: '1rem',
								}}
								className='gameDiv'
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ ease: 'anticipate', duration: 0.3 }}
							>
								<Game />
							</motion.div>
						</Grid>
						<Grid item xs={5}>
							<motion.div
								className='gameInfoDiv'
								style={{
									display: 'flex',
									textAlign: 'center',
									maxHeight: '637px',
									maxWidth: '350px',
									minWidth: '350px',
									minHeight: '637px',
								}}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ ease: 'anticipate', duration: 0.3 }}
							>
								<GameInfo />
							</motion.div>
						</Grid>
					</Grid>
				</Grid>
			)}
			{tablet && (
				<Grid
					container
					sx={{
						flexDirection: 'column',
						justifyContent: 'space-around',
						padding: '0 1rem',
					}}
				>
					<Grid item xs={12}>
						<motion.div
							className='gameInfoDiv'
							style={{ textAlign: 'center' }}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ ease: 'anticipate', duration: 0.3 }}
						>
							<GameInfo />
						</motion.div>
					</Grid>
					<Grid item xs={12} sx={{ marginTop: '3vh' }}>
						<motion.div
							style={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								gap: '1rem',
							}}
							className='gameDiv'
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ ease: 'anticipate', duration: 0.3 }}
						>
							<Game />
						</motion.div>
					</Grid>
				</Grid>
			)}
			{mobile && (
				<Grid
					container
					className='mobile'
					sx={{
						flexDirection: 'column',
						justifyContent: 'space-around',
						padding: '0 1rem',
					}}
				>
					<Grid item xs={12}>
						<motion.div
							className='gameInfoDiv'
							style={{ textAlign: 'center' }}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ ease: 'anticipate', duration: 0.3 }}
						>
							<GameInfo />
						</motion.div>
					</Grid>
					<Grid item xs={12}>
						<motion.div
							style={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								gap: '1rem',
							}}
							className='gameDiv'
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ ease: 'anticipate', duration: 0.3 }}
						>
							<Game />
						</motion.div>
					</Grid>
				</Grid>
			)}
		</>
	);
}

export default GamePage;
