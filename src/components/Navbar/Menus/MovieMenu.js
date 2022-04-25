import React, { useState } from 'react';
import data from '../../db.json';
import MovieCard from './MovieCard';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../../Redux';

const MovieMenu = ({ movieMenu, setMovieMenu, close }) => {
	const [movies, setMovies] = useState(data.movies);

	// import dispatch
	const dispatch = useDispatch();
	// import from action-creators.
	const { updateMovieId } = bindActionCreators(actionCreators, dispatch);

	const trending = [
		{
			id: 26,
			title: 'Spider-Man: No Way Home',
		},
		{
			id: 27,
			title: 'Doctor Strange in the Multiverse of Madness',
		},
		{
			id: 28,
			title: 'Thor: Love and Thunder',
		},
	];

	const latest = [
		'Black Widow',
		'Shang-Chi and The Legend of The Ten Rings',
		'Eternals',
		'Spider-Man: No Way Home',
		'Doctor Strange in the Multiverse of Madness',
		'Thor: Love and Thunder',
	];

	return (
		<div className={movieMenu ? 'menu' : 'hide'} onMouseOut={() => close()}>
			<div className='top-bar' onMouseOver={() => setMovieMenu(true)}>
				{trending.map((item, index) => {
					return (
						<Link
							to='movie_details'
							onClick={() => {
								updateMovieId(item.id);
								close();
							}}>
							{item.title}
						</Link>
					);
				})}
				<Link
					to='movies'
					onClick={() => {
						close();
					}}>
					See all movies
				</Link>
			</div>
			<div className='container' onMouseOver={() => setMovieMenu(true)}>
				<h1 className='title'> Movies </h1>
				<div className='display'>
					{movies.map((item, index) => {
						if (latest.includes(item.title))
							return <MovieCard data={item} close={close} />;
					})}
				</div>
			</div>
			<div className='bottom-bar' onMouseOver={() => setMovieMenu(true)}></div>
		</div>
	);
};

export default MovieMenu;
