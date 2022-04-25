import React from 'react';
import { AiOutlineClose, AiOutlineRight } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../../../Redux';
import { Link } from 'react-router-dom';
import '../Mobile.scss';

const MovieMenu = ({ movieMenu, setMovieMenu, setShowMobileMenu }) => {
	// import dispatch
	const dispatch = useDispatch();
	// import from action-creators.
	const { updateMovieId } = bindActionCreators(actionCreators, dispatch);

	// latest movies
	const latest = [
		'Eternals',
		'Spider-Man: No Way Home',
		'Doctor Strange in the Multiverse of Madness',
		'Thor: Love and Thunder',
	];

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

	// close btn for nav menu
	function close() {
		setMovieMenu(false);
		setShowMobileMenu(false);
	}

	return (
		<div
			className='sub-menu sub-menu-movies'
			style={{ left: movieMenu ? '000vw' : '200vw' }}>
			<div className='controls'>
				<AiOutlineClose
					style={{ color: 'white' }}
					onClick={() => setMovieMenu(false)}
				/>
			</div>
			<div className='sub-links'>
				<Link to='movies' onClick={() => close()}>
					See all movies
				</Link>
				{trending.map((item) => {
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
			</div>
		</div>
	);
};

export default MovieMenu;
