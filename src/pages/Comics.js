import React, { useState, useEffect } from 'react';
import Card from '../Components/Card/Card';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { AiFillCaretDown } from 'react-icons/ai';
import YearDropdown from '../Components/Dropdowns/YearDropdown';
import './Pages.scss';
const Comics = () => {
	// state
	const [data, setData] = useState([]);
	const [character, setCharacter] = useState(1009165);
	const [date, setDate] = useState(2022);
	const [loading, setLoading] = useState(false);

	// redux
	const getComics = useSelector((state) => state.getComics);
	const getDate = useSelector((state) => state.getDate);

	// get comics from marvel api
	useEffect(() => {
		const fetchComics = async () => {
			setLoading(true);
			try {
				const response = await axios.get(
					`http://gateway.marvel.com/v1/public${getComics}`
				);
				setData(response.data.data.results);
			} catch (error) {
				console.error(error.message);
			}
			setLoading(false);
		};
		fetchComics();
	}, [getComics, getDate]);

	console.log(data);

	return (
		<div className='page'>
			<div className='title'>
				<h1> Comics </h1>
				<YearDropdown date={date} />
			</div>

			<div className='grid-container'>
				{loading ? (
					<h1>Loading</h1>
				) : (
					data.map((item) => {
						if (
							item.thumbnail.path !==
							'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available'
						)
							return <Card data={item} />;
					})
				)}
			</div>
		</div>
	);
};

export default Comics;
