import React, { useEffect, useState } from 'react';
import Card from '../../components/Comic_Card/Card';
import '../../styles/Pages.scss';
import Dropdown from '../../components/Modal/Dropdown';
import YearDropdown from '../../components/Modal/Year/Dropdown';
const Comics = () => {
	const [data, setData] = useState([]);
	const [date, setDate] = useState(2022);
	let [limit, setLimit] = useState(100);
	const [character, setCharacter] = useState(1009165);

	let ts = process.env.REACT_APP_TIMESTAMP;
	let apiKey = process.env.REACT_APP_API_KEY;
	let hash = process.env.REACT_APP_HASH;

	useEffect(() => {
		fetch(
			`http://gateway.marvel.com/v1/public/characters/${character}/comics?startYear=${date}&ts=${ts}&apikey=${apiKey}&hash=${hash}`
		)
			.then((res) => res.json())
			.then((data) => {
				setData(data?.data.results);
			});
	}, [date, character]);

	const sum = (num) => {
		let num1 = limit;
		let num2 = num;
		let sum = num1 + num2;
		setLimit(sum);
	};

	return (
		<div className='page'>
			<div className='header'>
				<h1> Cocs </h1>
				<div className='control-bar'>
					<div className='dropdown control-box'>
						<YearDropdown setDate={setDate} date={date} />
					</div>
					<div className='dropdown control-box'>
						<Dropdown setCharacter={setCharacter} />
					</div>

					{/* <div className='sort control-box'>
						<p>Sort</p>
					</div> */}
				</div>
			</div>
			<div className='comic-container'>
				{data.map((item) => {
					if (
						item.thumbnail.path !==
						'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available'
					)
						return <Card comic={item} key={item.id} />;
				})}
			</div>
			<div className='view-more'>
				<p onClick={() => sum(25)}>More</p>
			</div>
		</div>
	);
};

export default Comics;
