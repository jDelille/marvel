import React, { useState, useEffect } from 'react';
import Card from '../../Components/Card/Card';
import axios from 'axios';
import { useSelector } from 'react-redux';
import '../Pages.scss';
import Loading from '../../Components/Loader/Loading';

const Comics = () => {
	// state
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);

	// redux
	const getComics = useSelector((state) => state.getComics);
	const category = useSelector((state) => state.category);

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
			setTimeout(setLoading(false), 1000);
		};
		fetchComics();
	}, [getComics]);

	console.log(data);

	return (
		<div className='page'>
			<div className='title'>
				<h1> {category}</h1>
			</div>
			<div className='grid-container'>
				{loading ? (
					<Loading loading={loading} />
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
