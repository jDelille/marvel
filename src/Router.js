import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Comics from './pages/comics/Comics';
import Details from './pages/comics/ComicDetails';
import Navbar from './components/Navbar/Navbar';
import MovieDetails from './pages/movies/MovieDetails';
import Movies from './pages/movies/Movies';
import About from './pages/about/About';
function RouterDOM() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path='/' element={<Comics />} />
			</Routes>
			<Routes>
				<Route path='/details' element={<Details />} />
			</Routes>
			<Routes>
				<Route path='/movie_details' element={<MovieDetails />} />
			</Routes>
			<Routes>
				<Route path='/movies' element={<Movies />} />
			</Routes>
			<Routes>
				<Route path='/about' element={<About />} />
			</Routes>
		</Router>
	);
}

export default RouterDOM;
