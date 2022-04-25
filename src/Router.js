import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Comics from './Pages/comics/Comics';
import Details from './Pages/comics/ComicDetails';
import Navbar from './Components/Navbar/Navbar';
import MovieDetails from './Pages/movies/MovieDetails';
import Movies from './Pages/movies/Movies';
import About from './Pages/about/About';
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
