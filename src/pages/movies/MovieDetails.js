import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state';
import MovieOverlay from '../../components/Overlay/MovieOverlay';
import { Link } from 'react-router-dom';
import './styles.scss';

const MovieDetails = () => {
	const [details, setDetails] = useState([]);
	let movieId = useSelector((state) => state.movieId);

	// import dispatch
	const dispatch = useDispatch();
	// import from action-creators.
	const { updateMovieId } = bindActionCreators(actionCreators, dispatch);

	useEffect(() => {
		fetch(`https://mcuapi.herokuapp.com/api/v1/movies/${movieId}`)
			.then((res) => res.json())
			.then((data) => {
				setDetails(data);
			});
	}, [movieId]);

	return (
		<>
			<div className='details page'>
				<div className='control-bar'>
					<Link to='/movies' className='back-btn'>
						Back
					</Link>
					<div className='switch-controls'>
						<p onClick={() => updateMovieId(movieId - 1)}> Previous </p>
						<p onClick={() => updateMovieId(movieId + 1)}> Next </p>
					</div>
				</div>
				<MovieOverlay details={details} />
				<div className='comic-content' key={details.id}>
					<div className='left'>
						<img
							className='comic-img-lg'
							src={`${details.cover_url}`}
							alt={details.title}
						/>
					</div>
					<div className='right'>
						{/* name */}
						<div className='title'>
							<h1> {details.title} </h1>
						</div>
						{/* release date */}
						<div className='date'>
							<h1>Released: </h1>
							<h1> {details.release_date} </h1>
						</div>
						{/* director */}
						<div className='director'>
							<h1>Directed by:</h1>
							<h1> {details.directed_by} </h1>
						</div>
						{/* phase */}
						<div className='phase'>
							<h1>Phase {details.phase}</h1>
						</div>
						{/* overview */}
						<div className='overview'>
							<h1>Overview: </h1>
							<p>{details.overview}</p>
						</div>
					</div>
				</div>
			</div>
			<div className='extra-info'>
				<div className='show-movie-info'>
					<div className='box'>
						<p>Duration: </p>
						<p className='value'>{details.duration} Minutes</p>
					</div>
					<div className='box'>
						<p>Saga: </p>
						<p className='value'>{details.saga}</p>
					</div>
					<div className='box'>
						<p>Post Credit Scenes: </p>
						<p className='value'>{details.post_credit_scenes}</p>
					</div>
					<div className='box'>
						<p>Chronology: </p>
						<p className='value'>{details.chronology}</p>
					</div>
				</div>

				<div className='related-movies'>
					<h1> Related Movies </h1>
					<div className='img-container'>
						{details?.related_movies?.map((item, index) => {
							return (
								<img
									className='comic-img-lg'
									src={`${item.cover_url}`}
									alt={details.title}
								/>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
};

export default MovieDetails;
