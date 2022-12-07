import React from 'react';

function MainPage() {
	return (
		<>
			<h1 className='mainHeader'>Michael Baker</h1>
			<h3 className='mainSubHeader mainHeader'>Frontend Developer</h3>
			<div className='mainContainer'>
				<div className='mpDivs'>
					Skills
					<ul className='skillList'>
						<li>HTML</li>
						<li>CSS</li>
						<li>JavaScript</li>
						<li>React</li>
						<li>Node</li>
						<li>Git</li>
						<li>Heroku</li>
					</ul>
				</div>
				<div className='mpDivs'>Projects</div>
				<div className='mpDivs'>Goals</div>
			</div>
		</>
	);
}

export default MainPage;
