import React, { useEffect, useState } from 'react';
import Card from '../components/Comic_Card/Card';
import './Home.scss';

const Home = () => {
	const [data, setData] = useState([]);

	let ts = process.env.REACT_APP_TIMESTAMP;
	let apiKey = process.env.REACT_APP_API_KEY;
	let hash = process.env.REACT_APP_HASH;
	useEffect(() => {
		fetch(
			`http://gateway.marvel.com/v1/public/comics?&format=comic&dateDescriptor=nextWeek&limit=8&ts=${ts}&apikey=${apiKey}&hash=${hash}`
		)
			.then((res) => res.json())
			.then((data) => {
				setData(data.data.results);
			});
	}, []);

	console.log(data);

	return (
		<div className='home-page'>
			<div className='hero'>
				<div className='text'>
					<h1> View everything marvel </h1>
					<p> Check out comics, characters, and more! </p>
				</div>
			</div>
			<section className='latest-comics'>
				<h1> Upcomming Comics </h1>
				<div className='comic-container-home'>
					{data.map((comic) => {
						return <Card comic={comic} />;
					})}
				</div>
			</section>
			<section className='trending'>
				<h1> </h1>
			</section>
		</div>
	);
};

export default Home;
