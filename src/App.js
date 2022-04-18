import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Comics from './pages/comics/Comics';
import Characters from './pages/characters/Characters';
import Navbar from './components/Navbar/Navbar';
import Details from './pages/comics/Details';
import './styles/App.scss';
import Character from './pages/characters/Character';
import Movies from './pages/movies/Movies';
import MovieDetails from './pages/movies/MovieDetails';

function App() {
	const [id, setId] = useState();
	const [charId, setCharId] = useState(1011334);

	return (
		<Router>
			<div className='App'>
				<Navbar />
				<Routes>
					<Route path='/' element={<Home />} />
				</Routes>
				<Routes>
					<Route path='/comics' element={<Comics />} />
				</Routes>
				<Routes>
					<Route path='/characters' element={<Characters />} />
				</Routes>
				<Routes>
					<Route path='/character' element={<Character />} />
				</Routes>
				<Routes>
					<Route
						path='/details'
						element={<Details id={id} charId={charId} />}
					/>
				</Routes>
				<Routes>
					<Route path='/movies' element={<Movies />} />
				</Routes>
				<Routes>
					<Route path='/movie_details' element={<MovieDetails />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
