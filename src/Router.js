import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Comics from './Pages/Comics';
import Details from './Pages/comics/Details';
import Navbar from './Components/Navbar/Navbar';
import MovieDetails from './Pages/movies/MovieDetails';
import Movies from './Pages/movies/Movies';
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
		</Router>
	);
}

export default RouterDOM;
