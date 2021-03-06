import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import '../Pages.scss';
import Loading from '../../components/Loader/Loading';
import ComicCard from '../../components/Card/comics/ComicCard';

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
					`https://gateway.marvel.com/v1/public${getComics}`
				);
				setData(response.data.data.results);
			} catch (error) {
				console.error(error.message);
			}
			setTimeout(setLoading(false), 1000);
		};
		fetchComics();
	}, [getComics]);

	return (
		<div className='page'>
			<div className='title'>{!loading && <h1> {category}</h1>}</div>
			<div className='grid-container'>
				{loading ? (
					<Loading loading={loading} />
				) : (
					data.map((item) => {
						if (
							item.thumbnail.path !==
							'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available'
						)
							return <ComicCard data={item} />;
					})
				)}
			</div>
		</div>
	);
};

export default Comics;
