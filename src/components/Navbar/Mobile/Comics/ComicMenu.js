import React from 'react';
import { AiOutlineClose, AiOutlineRight } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../../../Redux';
import { Link } from 'react-router-dom';
import '../Mobile.scss';

const ComicMenu = ({ comicMenu, setComicMenu, setShowMobileMenu }) => {
	// import dispatch
	const dispatch = useDispatch();
	// import from action-creators.
	const { updateComicEndpoint, updateCategory } = bindActionCreators(
		actionCreators,
		dispatch
	);

	// marvel api auth
	let ts = process.env.REACT_APP_TIMESTAMP;
	let apiKey = process.env.REACT_APP_API_KEY;
	let hash = process.env.REACT_APP_HASH;

	let thor = `/characters/1009664/comics?ts=${ts}&apikey=${apiKey}&hash=${hash}`;
	let ironman = `/characters/1009368/comics?ts=${ts}&apikey=${apiKey}&hash=${hash}`;
	let moonknight = `/characters/1009452/comics?ts=${ts}&apikey=${apiKey}&hash=${hash}`;
	let strange = `/characters/1009282/comics?ts=${ts}&apikey=${apiKey}&hash=${hash}`;

	function close() {
		setComicMenu(false);
		setShowMobileMenu(false);
	}
	return (
		<div className='sub-menu' style={{ left: comicMenu ? '000vw' : '200vw' }}>
			<div className='controls'>
				<AiOutlineClose
					style={{ color: 'white' }}
					onClick={() => setComicMenu(false)}
				/>
			</div>
			<div className='sub-links'>
				<Link
					to='/'
					onClick={() => {
						close();
					}}>
					Latest Comics
				</Link>
				<Link
					to='/'
					onClick={() => {
						close();
					}}>
					Upcomming Comics
				</Link>
				<Link
					to='/'
					onClick={() => {
						close();
					}}>
					Digital Issues
				</Link>
				<Link
					to='/'
					onClick={() => {
						close();
					}}>
					Infinite Comics
				</Link>
				<Link
					to='/'
					onClick={() => {
						close();
					}}>
					Avengers
				</Link>
				<p className='popular-label'>Popular Heros:</p>
				<Link
					to='/'
					className='character-label'
					onClick={() => {
						updateComicEndpoint(ironman);
						updateCategory('Iron Man');
						close();
					}}>
					Iron Man
				</Link>
				<Link
					to='/'
					className='character-label'
					onClick={() => {
						updateComicEndpoint(strange);
						updateCategory('Doctor Strange');
						close();
					}}>
					Doctor Strange
				</Link>
				<Link
					to='/'
					className='character-label'
					onClick={() => {
						updateComicEndpoint(thor);
						updateCategory('Thor');
						close();
					}}>
					Thor
				</Link>
				<Link
					to='/'
					className='character-label'
					onClick={() => {
						updateComicEndpoint(moonknight);
						updateCategory('Moon Knight ');
						close();
					}}>
					Moon Knight
				</Link>
			</div>
		</div>
	);
};

export default ComicMenu;
