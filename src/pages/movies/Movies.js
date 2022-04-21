import React, { useEffect, useState } from 'react';
import MovieCard from '../../Components/Navbar/Menus/MovieCard';
import axios from 'axios';
import '../Pages.scss';
import Loading from '../../Components/Loader/Loading';

const Movies = () => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);

	// get comics from marvel api
	useEffect(() => {
		const fetchMovies = async () => {
			setLoading(true);
			try {
				const response = await axios.get(
					`https://rvel-mcu-api.herokuapp.com/movies`
				);
				setData(response.data);
			} catch (error) {
				console.error(error.message);
			}
			setTimeout(setLoading(false), 5000);
		};
		fetchMovies();
	}, []);

	return (
		<>
			<div className='page'>
				<div className='header'>
					<h1> Movies </h1>
				</div>
				<div className='grid-container-reverse'>
					{loading ? (
						<Loading loading={loading} />
					) : (
						data.map((item) => {
							return <MovieCard data={item} />;
						})
					)}
				</div>
			</div>
		</>
	);
};

export default Movies;
