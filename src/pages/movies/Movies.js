import React, { useState, useEffect } from 'react';
import Card from '../../components/Movie_Card/Card';

const Movies = () => {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		fetch(`https://mcuapi.herokuapp.com/api/v1/movies`)
			.then((res) => res.json())
			.then((data) => {
				setMovies(data.data);
			});
	}, []);

	return (
		<div className='comic-container page'>
			{movies.map((item) => {
				return <Card movies={item} />;
			})}
		</div>
	);
};

export default Movies;
