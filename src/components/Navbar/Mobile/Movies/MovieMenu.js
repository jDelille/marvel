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
	const { updateComicEndpoint, updateCategory } = bindActionCreators(
		actionCreators,
		dispatch
	);

	// latest movies
	const latest = [
		'Eternals',
		'Spider-Man: No Way Home',
		'Doctor Strange in the Multiverse of Madness',
		'Thor: Love and Thunder',
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
				{latest.map((item) => {
					return (
						<Link
							to='/'
							onClick={() => {
								close();
							}}>
							{item}
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export default MovieMenu;
