import React, { useState } from 'react';
import data from '../../db.json';
import MovieCard from './MovieCard';

const MovieMenu = ({ movieMenu, setMovieMenu, close }) => {
	const [movies, setMovies] = useState(data.movies);
	const trending = [
		'Black Widow',
		'Shang-Chi and The Legend of The Ten Rings',
		'Eternals',
		'Spider-Man: No Way Home',
		'Doctor Strange in the Multiverse of Madness',
		'Thor: Love and Thunder',
		'See All Movies',
	];

	return (
		<div className={movieMenu ? 'menu' : 'hide'} onMouseOut={() => close()}>
			<div className='top-bar' onMouseOver={() => setMovieMenu(true)}>
				{trending.map((item, index) => {
					if (index > 2) return <p>{item}</p>;
				})}
			</div>
			<div className='container' onMouseOver={() => setMovieMenu(true)}>
				<h1 className='title'> Movies </h1>
				<div className='display'>
					{movies.map((item, index) => {
						if (trending.includes(item.title)) return <MovieCard data={item} />;
					})}
				</div>
			</div>
			<div className='bottom-bar' onMouseOver={() => setMovieMenu(true)}></div>
		</div>
	);
};

export default MovieMenu;
