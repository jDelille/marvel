import React, { useEffect, useState } from 'react';
import ComicCard from './ComicCard';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../../Redux';
import { Link } from 'react-router-dom';
const ComicMenu = ({ menu, setMenu, close }) => {
	// marvel api auth
	let ts = process.env.REACT_APP_TIMESTAMP;
	let apiKey = process.env.REACT_APP_API_KEY;
	let hash = process.env.REACT_APP_HASH;

	// state
	const [loading, setLoading] = useState(false);
	const [latest, setLatest] = useState([]);

	// redux
	const getDate = useSelector((state) => state.getDate);

	// import dispatch
	const dispatch = useDispatch();
	// import from action-creators.
	const { updateComicEndpoint, updateCategory } = bindActionCreators(
		actionCreators,
		dispatch
	);

	// get comics from marvel api
	useEffect(() => {
		const fetchComics = async () => {
			setLoading(true);
			try {
				const response = await axios.get(
					`https://gateway.marvel.com/v1/public/comics?format=comic&formatType=comic&noVariants=true&dateDescriptor=thisWeek&orderBy=title&ts=${ts}&apikey=${apiKey}&hash=${hash}`
				);
				setLatest(response.data.data.results);
			} catch (error) {
				console.error(error.message);
			}
			setLoading(false);
		};
		fetchComics();
	}, []);

	// endpoints
	let allComics = `/comics?ts=${ts}&apikey=${apiKey}&hash=${hash}`;
	let latestComics = `/comics?noVariants=true&dateDescriptor=thisWeek&ts=${ts}&apikey=${apiKey}&hash=${hash}`;
	let upcommingComics = `/comics?noVariants=true&dateDescriptor=nextWeek&ts=${ts}&apikey=${apiKey}&hash=${hash}`;
	let avengers = `/comics?noVariants=true&offset=50&titleStartsWith=Avengers&ts=${ts}&apikey=${apiKey}&hash=${hash}`;
	let digital = `/comics?noVariants=true&format=digital%20comic&ts=${ts}&apikey=${apiKey}&hash=${hash}`;
	let infinite = `/comics?noVariants=true&format=infinite%20comic&ts=${ts}&apikey=${apiKey}&hash=${hash}`;

	let thor = `/characters/1009664/comics?ts=${ts}&apikey=${apiKey}&hash=${hash}`;
	let ironman = `/characters/1009368/comics?ts=${ts}&apikey=${apiKey}&hash=${hash}`;
	let moonknight = `/characters/1009452/comics?ts=${ts}&apikey=${apiKey}&hash=${hash}`;
	let strange = `/characters/1009282/comics?ts=${ts}&apikey=${apiKey}&hash=${hash}`;

	return (
		<div className={menu ? 'menu' : 'hide'} onMouseOut={() => close()}>
			<div className='top-bar' onMouseOver={() => setMenu(true)}>
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
			</div>
			<div className='container' onMouseOver={() => setMenu(true)}>
				<h1 className='title'> Latest Comics </h1>
				<div className='display-comics'>
					{latest.map((item, index) => {
						if (index <= 5)
							return (
								<ComicCard data={item} close={close} className='latest-img' />
							);
					})}
				</div>
			</div>
			<div className='bottom-bar' onMouseOver={() => setMenu(true)}>
				<p> Popular: </p>
				<Link
					to='/'
					onClick={() => {
						updateComicEndpoint(ironman);
						updateCategory('Iron Man');
						close();
					}}>
					Iron Man
				</Link>
				<Link
					to='/'
					onClick={() => {
						updateComicEndpoint(strange);
						updateCategory('Doctor Strange');
						close();
					}}>
					Doctor Strange
				</Link>
				<Link
					to='/'
					onClick={() => {
						updateComicEndpoint(thor);
						updateCategory('Thor');
						close();
					}}>
					Thor
				</Link>
				<Link
					to='/'
					onClick={() => {
						updateComicEndpoint(moonknight);
						updateCategory('Moon Knight');
						close();
					}}>
					Moon Knight
				</Link>
			</div>
		</div>
	);
};

export default ComicMenu;
