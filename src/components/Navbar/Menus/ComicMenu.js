import React, { useEffect, useState } from 'react';
import Card from '../../Card/Card';
import axios from 'axios';

const ComicMenu = ({ menu, setMenu, close }) => {
	let ts = process.env.REACT_APP_TIMESTAMP;
	let apiKey = process.env.REACT_APP_API_KEY;
	let hash = process.env.REACT_APP_HASH;

	const [loading, setLoading] = useState(false);
	const [latest, setLatest] = useState([]);

	// get comics from marvel api
	// change the character and the date
	useEffect(() => {
		const fetchComics = async () => {
			setLoading(true);
			try {
				const response = await axios.get(
					`http://gateway.marvel.com/v1/public/comics?&format=comic&dateDescriptor=nextWeek&limit=8&ts=${ts}&apikey=${apiKey}&hash=${hash}`
				);
				setLatest(response.data.data.results);
			} catch (error) {
				console.error(error.message);
			}
			setLoading(false);
		};
		fetchComics();
	}, []);

	return (
		<div className={menu ? 'menu' : 'hide'} onMouseOut={() => close()}>
			<div className='top-bar' onMouseOver={() => setMenu(true)}>
				<p> Latest Comics </p>
				<p> Upcomming Comics </p>
				<p> Digital Issues </p>
				<p> Characters </p>
				<p> Avengers </p>
			</div>
			<div className='container' onMouseOver={() => setMenu(true)}>
				<h1 className='title'> Latest Comics </h1>
				<div className='display'>
					{latest.map((item, index) => {
						if (index <= 5) return <Card data={item} />;
					})}
				</div>
			</div>
			<div className='bottom-bar' onMouseOver={() => setMenu(true)}>
				<p> Popular: </p>
				<p> Iron Man </p>
				<p> Thor </p>
				<p> Captain America </p>
				<p> </p>
			</div>
		</div>
	);
};

export default ComicMenu;
