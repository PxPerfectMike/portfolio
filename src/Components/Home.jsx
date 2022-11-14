import React from 'react';
import { Grid } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import CodeIcon from '@mui/icons-material/Code';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import { motion } from 'framer-motion';

function Home() {
	const matches = useMediaQuery('(min-width:900px)');

	return (
		<>
			{matches ? (
				<Grid
					container
					spacing={2}
					sx={{
						justifyContent: 'center',
						height: '70vh',
						textAlign: 'center',
						padding: '0',
						margin: '0',
						width: '96vw',
						gap: '10px',
					}}
				>
					<Grid
						item
						xs={12}
						md={3}
						sx={{
							color: '#f5f5f5',
							border: '3px solid #f5f5f5',
							justifySelf: 'center',
							margin: '20vh 2vw 0 2vw',
							padding: '0 10px !important',
						}}
					>
						<motion.div
							className='box1'
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ ease: 'anticipate', duration: 0.3 }}
						>
							<ColorLensIcon sx={{ fontSize: '40px', marginTop: '3vh' }} />
							<h2>Designer</h2>
							<p>
								I value simple and meaningful experiences, clean design
								patterns, and thoughtful interactions. Everything I create has
								thought and purpose behind it and I strive to make the best
								possible user experience across all projects.
							</p>
							<a
								href='https://pxperfect-quick-chat.herokuapp.com/'
								target='_blank'
								rel='noreferrer'
								style={{
									fontSize: '40px',
									color: 'gold',
									fontFamily: '"Pacifico", cursive',
									marginTop: '30px',
								}}
							>
								Quick Chat App
							</a>
						</motion.div>
					</Grid>
					<Grid
						className='box2'
						item
						xs={12}
						md={3}
						sx={{
							color: '#f5f5f5',
							border: '3px solid #f5f5f5',
							margin: '20vh 2vw 0 2vw',
							padding: '0 10px !important',
						}}
					>
						<motion.div
							className='box2'
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{
								ease: 'anticipate',
								duration: 0.3,
								display: 'flex',
								flexDirection: 'column',
							}}
						>
							<CodeIcon sx={{ fontSize: '40px', marginTop: '3vh' }} />
							<h2>Frontend Developer</h2>
							<p>
								I like to create things from scratch (especially in React), and
								enjoy bringing interactive ideas to life in the browser using
								modern techniques. Beautiful and functional design is my
								passion.
							</p>
							<h1
								style={{
									fontFamily: '"bebas neue", cursive',
									color: 'red',
									fontSize: '40px',
								}}
							>
								Netflix Helper
							</h1>
							<ul
								style={{
									listStyleType: 'none',
									marginBlockStart: 0,
									marginBlockEnd: 0,
									paddingInlineStart: 0,
								}}
							>
								<li className='blockList'>
									<a
										href='https://play.google.com/store/apps/details?id=com.netflix_helper_app.www.twa&hl=en_US&gl=US&pli=1'
										target='_blank'
										rel='noreferrer'
										style={{
											fontSize: '20px',
											color: 'lightblue',
										}}
									>
										(Google Play Store)
									</a>
								</li>
								{'or'}
								<li className='blockList'>
									<a
										href='https://www.netflix-helper-app.com/'
										target='_blank'
										rel='noreferrer'
										style={{
											fontSize: '20px',
											color: 'lightblue',
										}}
									>
										(PWA Website)
									</a>
								</li>
							</ul>
						</motion.div>
					</Grid>
					<Grid
						item
						xs={12}
						md={3}
						sx={{
							color: '#f5f5f5',
							border: '3px solid #f5f5f5',
							margin: '20vh 2vw 0 2vw',
							padding: '0 10px !important',
						}}
					>
						<motion.div
							className='box3'
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ ease: 'anticipate', duration: 0.3 }}
						>
							<LightbulbIcon sx={{ fontSize: '40px', marginTop: '3vh' }} />
							<h2>Naturally Curious</h2>
							<p>
								One of my favorite things about programming is learning new
								concepts and practices. I am genuinely interested in learning
								new things and I am always looking for new opportunities to
								grow. The best thing about tech is that the pool of knowledge is
								endless.
							</p>

							<a
								href='https://pxperfect-quick-chat.herokuapp.com/'
								target='_blank'
								rel='noreferrer'
								style={{
									textDecoration: 'none',
									fontSize: '40px',
									color: 'lightgreen',
									fontFamily: '"Roboto", cursive',
									marginBottom: '10px',
								}}
							>
								<h1
									style={{
										fontSize: '40px',
										color: 'lightgreen',
										fontFamily: 'roboto',
									}}
								>
									S.E.P.C.
								</h1>
							</a>
							<p style={{ fontSize: '14px', margin: 0 }}>
								(Super Easy Programmed CSS)
							</p>
						</motion.div>
					</Grid>
				</Grid>
			) : (
				<Grid
					container
					spacing={2}
					sx={{
						justifyContent: 'center',
						textAlign: 'center',
						padding: '0',
						margin: '-3vh 0 0 0',
						width: '96vw',
					}}
				>
					<Grid
						item
						xs={12}
						md={3}
						sx={{
							color: '#f5f5f5',
							border: '3px solid #f5f5f5',
							justifySelf: 'center',
							margin: `22vh 2vw 0 2vw`,
							padding: '0 !important',
						}}
					>
						<motion.div
							className='box1'
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ ease: 'anticipate', duration: 0.3 }}
						>
							<ColorLensIcon className='homeIcon' sx={{ fontSize: '40px' }} />
							<h2 style={{ fontSize: '20px', margin: 0 }}>Designer</h2>
							<p className='homeBoxDescription'>
								I value simple and meaningful experiences, clean design
								patterns, and thoughtful interactions. Everything I create has
								thought and purpose behind it and I strive to make the best
								possible user experience across all projects.
							</p>
							<a
								href='https://pxperfect-quick-chat.herokuapp.com/'
								target='_blank'
								rel='noreferrer'
								style={{ textDecoration: 'none', color: '#f5f5f5' }}
							>
								Quick Chat App
							</a>
						</motion.div>
					</Grid>
					<Grid
						className='box2'
						item
						xs={12}
						md={3}
						sx={{
							color: '#f5f5f5',
							border: '3px solid #f5f5f5',
							margin: '2vh 2vw 0 2vw',
							padding: '0 !important',
						}}
					>
						<motion.div
							className='box2'
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ ease: 'anticipate', duration: 0.3 }}
						>
							<CodeIcon className='homeIcon' sx={{ fontSize: '40px' }} />
							<h2 style={{ fontSize: '20px', margin: 0 }}>
								Frontend Developer
							</h2>
							<p className='homeBoxDescription'>
								I like to create things from scratch (especially in React), and
								enjoy bringing interactive ideas to life in the browser using
								modern techniques. Beautiful and functional design is my
								passion.
							</p>
						</motion.div>
					</Grid>
					<Grid
						item
						xs={12}
						md={3}
						sx={{
							color: '#f5f5f5',
							border: '3px solid #f5f5f5',
							margin: '2vh 2vw 0 2vw',
							padding: '0 !important',
						}}
					>
						<motion.div
							className='box3'
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ ease: 'anticipate', duration: 0.3 }}
						>
							<LightbulbIcon className='homeIcon' sx={{ fontSize: '40px' }} />
							<h2 style={{ fontSize: '20px', margin: 0 }}>Naturally Curious</h2>
							<p className='homeBoxDescription'>
								One of my favorite things about programming is learning new
								concepts and practices. I am genuinely interested in learning
								new things and I am always looking for new opportunities to
								grow. The best thing about tech is that the pool of knowledge is
								endless.
							</p>
						</motion.div>
					</Grid>
				</Grid>
			)}
		</>
	);
}

export default Home;
