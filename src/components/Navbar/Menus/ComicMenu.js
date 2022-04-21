import React, { useEffect, useState } from 'react';
import Card from '../../Card/Card';
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
	const [date, setDate] = useState(2022);

	// redux
	const getDate = useSelector((state) => state.getDate);

	// import dispatch
	const dispatch = useDispatch();
	// import from action-creators.
	const { updateComicEndpoint } = bindActionCreators(actionCreators, dispatch);

	// get comics from marvel api
	useEffect(() => {
		const fetchComics = async () => {
			setLoading(true);
			try {
				const response = await axios.get(
					`http://gateway.marvel.com/v1/public/comics?format=comic&formatType=comic&noVariants=true&dateDescriptor=thisWeek&orderBy=title&ts=${ts}&apikey=${apiKey}&hash=${hash}`
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
	let latestComics = `/comics?dateDescriptor=thisWeek&ts=${ts}&apikey=${apiKey}&hash=${hash}`;
	let upcommingComics = `/comics?dateDescriptor=nextWeek&ts=${ts}&apikey=${apiKey}&hash=${hash}`;
	let avengers = `/comics?titleStartsWith=Avengers&startYear=${getDate}&ts=${ts}&apikey=${apiKey}&hash=${hash}`;
	let digital = `/comics?format=digital%20comic&ts=${ts}&apikey=${apiKey}&hash=${hash}`;
	let infinite = `/comics?format=infinite%20comic&ts=${ts}&apikey=${apiKey}&hash=${hash}`;

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
						close();
					}}>
					Latest Comics
				</Link>
				<Link
					to='/'
					onClick={() => {
						updateComicEndpoint(upcommingComics);
						close();
					}}>
					Upcomming Comics
				</Link>
				<Link
					to='/'
					onClick={() => {
						updateComicEndpoint(digital);
						close();
					}}>
					Digital Issues
				</Link>
				<Link
					to='/'
					onClick={() => {
						updateComicEndpoint(infinite);
						close();
					}}>
					Infinite Comics
				</Link>
				<Link
					to='/'
					onClick={() => {
						updateComicEndpoint(avengers);
						close();
					}}>
					Avengers
				</Link>
			</div>
			<div className='container' onMouseOver={() => setMenu(true)}>
				<h1 className='title'> Latest Comics </h1>
				<div className='display-comics'>
					{latest.map((item, index) => {
						if (index <= 5) return <Card data={item} close={close} />;
					})}
				</div>
			</div>
			<div className='bottom-bar' onMouseOver={() => setMenu(true)}>
				<p> Popular: </p>
				<Link
					to='/'
					onClick={() => {
						updateComicEndpoint(ironman);
						close();
					}}>
					Iron Man
				</Link>
				<Link
					to='/'
					onClick={() => {
						updateComicEndpoint(strange);
						close();
					}}>
					Doctor Strange
				</Link>
				<Link
					to='/'
					onClick={() => {
						updateComicEndpoint(thor);
						close();
					}}>
					Thor
				</Link>
				<Link
					to='/'
					onClick={() => {
						updateComicEndpoint(moonknight);
						close();
					}}>
					Moonknight
				</Link>
			</div>
		</div>
	);
};

export default ComicMenu;
