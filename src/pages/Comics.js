import React, { useState, useEffect } from 'react';
import Card from '../Components/Card/Card';
import axios from 'axios';
import './Pages.scss';
import Controls from '../Components/Controls/Comic/Controls';
const Comics = () => {
	let ts = process.env.REACT_APP_TIMESTAMP;
	let apiKey = process.env.REACT_APP_API_KEY;
	let hash = process.env.REACT_APP_HASH;

	const [data, setData] = useState([]);
	const [character, setCharacter] = useState(1009165);
	const [date, setDate] = useState(2022);
	const [loading, setLoading] = useState(false);

	// get comics from marvel api
	// change the character and the date
	useEffect(() => {
		const fetchComics = async () => {
			setLoading(true);
			try {
				const response = await axios.get(
					`http://gateway.marvel.com/v1/public/characters/${character}/comics?startYear=${date}&ts=${ts}&apikey=${apiKey}&hash=${hash}`
				);
				setData(response.data.data.results);
			} catch (error) {
				console.error(error.message);
			}
			setLoading(false);
		};
		fetchComics();
	}, [apiKey, character, date, hash, ts]);

	return (
		<div className='page'>
			{/* <Controls setCharacter={setCharacter} /> */}
			<div className='grid-container'>
				{loading ? (
					<h1>Loading</h1>
				) : (
					data.map((item) => {
						return <Card data={item} />;
					})
				)}
			</div>
		</div>
	);
};

export default Comics;
