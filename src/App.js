import GamePage from './Components/Game/GamePage';
import MainPage from './Components/MainPage/MainPage';

function App() {
	const pageRendered = 1;

	return (
		<>
			{pageRendered === 1 && <MainPage />}
			{pageRendered === 0 && <GamePage />}
		</>
	);
}

export default App;
