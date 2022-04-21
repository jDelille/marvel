import React, { useEffect, useState } from 'react';
import MovieCard from '../../Components/Navbar/Menus/MovieCard';
import '../Pages.scss';
import data from '../../Components/db.json';

const Movies = () => {
	return (
		<>
			<div className='page'>
				<div className='header'>
					<h1> Movies </h1>
				</div>
				<div className='grid-container-reverse'>
					{data.movies.map((item) => {
						return <MovieCard data={item} />;
					})}
				</div>
			</div>
		</>
	);
};

export default Movies;
