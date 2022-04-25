import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../../../Redux';
import { Link } from 'react-router-dom';
import '../Mobile.scss';

const ComicMenu = ({ comicMenu, setComicMenu, setShowMobileMenu }) => {
	const dispatch = useDispatch();
	const { updateComicEndpoint, updateCategory } = bindActionCreators(
		actionCreators,
		dispatch
	);

	// marvel api auth
	let ts = process.env.REACT_APP_TIMESTAMP;
	let apiKey = process.env.REACT_APP_API_KEY;
	let hash = process.env.REACT_APP_HASH;

	// comics endpoints
	let allComics = `/comics?ts=${ts}&apikey=${apiKey}&hash=${hash}`;
	let latestComics = `/comics?dateDescriptor=thisWeek&ts=${ts}&apikey=${apiKey}&hash=${hash}`;
	let upcommingComics = `/comics?dateDescriptor=nextWeek&ts=${ts}&apikey=${apiKey}&hash=${hash}`;
	let avengers = `/comics?titleStartsWith=Avengers&ts=${ts}&apikey=${apiKey}&hash=${hash}`;
	let digital = `/comics?format=digital%20comic&ts=${ts}&apikey=${apiKey}&hash=${hash}`;
	let infinite = `/comics?format=infinite%20comic&ts=${ts}&apikey=${apiKey}&hash=${hash}`;

	// popular hero endpoints
	let thor = `/characters/1009664/comics?ts=${ts}&apikey=${apiKey}&hash=${hash}`;
	let ironman = `/characters/1009368/comics?ts=${ts}&apikey=${apiKey}&hash=${hash}`;
	let moonknight = `/characters/1009452/comics?ts=${ts}&apikey=${apiKey}&hash=${hash}`;
	let strange = `/characters/1009282/comics?ts=${ts}&apikey=${apiKey}&hash=${hash}`;

	// close the nav menu
	function close() {
		setComicMenu(false);
		setShowMobileMenu(false);
	}
	return (
		<div className='sub-menu' style={{ left: comicMenu ? '0vw' : '200vw' }}>
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
						updateComicEndpoint(latestComics);
						updateCategory('Latest Comics');
						close();
					}}>
					Latest Comics
				</Link>
				<Link
					to='/'
					onClick={() => {
						updateComicEndpoint(upcommingComics);
						updateCategory('Upcomming Comics');
						close();
					}}>
					Upcomming Comics
				</Link>
				<Link
					to='/'
					onClick={() => {
						updateComicEndpoint(digital);
						updateCategory('Digital Issues');
						close();
					}}>
					Digital Issues
				</Link>
				<Link
					to='/'
					onClick={() => {
						updateComicEndpoint(infinite);
						updateCategory('Infinite Comics');
						close();
					}}>
					Infinite Comics
				</Link>
				<Link
					to='/'
					onClick={() => {
						updateComicEndpoint(avengers);
						updateCategory('Avengers Comics ');
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
