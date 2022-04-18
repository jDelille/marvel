import React, { useEffect, useState } from 'react';
import Card from '../../components/Comic_Card/Card';
import '../../styles/Pages.scss';
const Comics = () => {
	const [data, setData] = useState([]);

	const [variants, setVariants] = useState(false);
	const [date, setDate] = useState(2008);

	let ts = process.env.REACT_APP_TIMESTAMP;
	let apiKey = process.env.REACT_APP_API_KEY;
	let hash = process.env.REACT_APP_HASH;

	useEffect(() => {
		fetch(
			`http://gateway.marvel.com/v1/public/comics?noVariants=${variants}&format=comic&startYear=${date}&hasDigitalIssue=true&limit=100&ts=${ts}&apikey=${apiKey}&hash=${hash}`
		)
			.then((res) => res.json())
			.then((data) => {
				setData(data.data.results);
			});
	}, [date]);

	return (
		<div className='comic-container page'>
			{data.map((item) => {
				return <Card comic={item} key={item.id} />;
			})}
		</div>
	);
};

export default Comics;
