import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { AiFillCaretRight } from 'react-icons/ai';
import '../../Styles/MovieDetails.scss';
import data from '../../Components/db.json';
import MovieOverlay from '../../Components/Overlay/MovieOverlay';
import ReactPlayer from 'react-player';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../Redux';

function MovieDetails() {
	// state
	const [details, setDetails] = useState(data.movies);

	// redux
	const movieId = useSelector((state) => state.movieId);

	// import dispatch
	const dispatch = useDispatch();
	// import from action-creators.
	const { updateMovieId } = bindActionCreators(actionCreators, dispatch);

	// only show movie details with matching id
	let overlay = details;
	for (let i = 0; i < details.length; i++) {
		if (details[i].id === movieId) {
			overlay = details[i];
		}
	}

	// show the next movie in MCU timeline

	let next;

	for (let i = 0; i < details.length; i++) {
		if (details[i].chronology === overlay.chronology + 1) {
			next = details[i];
		}
	}

	console.log(next);

	return (
		<>
			<div className='movie-details page'>
				<div className='control-bar'>
					<Link to='/' className='back-btn'>
						Back
					</Link>
					<a href='https://www.marvel.com/' target='_blank' rel='noreferrer'>
						Go To Marvel.com
					</a>
				</div>
				{/* <MovieOverlay details={overlay} /> */}
				{details.map((item) => {
					if (item.id === movieId)
						return (
							<>
								<div className='comic-content' key={item.id}>
									<div className='top'>
										<MovieOverlay details={overlay} />
										<img className='comic-img-lg' src={item.logo} alt='' />
									</div>
									<div className='middle'>
										<div className='left'>
											<img src={item.poster_img} alt='' />
										</div>
										<div className='right'>
											<h1>{item.title}</h1>
											<p>Release: {item.date}</p>
											<p>Director: {item.director}</p>
											<p>{item.description}</p>
											<p className='next-movie'>
												Next Movie in timeline
												<span onClick={() => updateMovieId(movieId + 1)}>
													{next?.title} <AiFillCaretRight className='arrow' />
												</span>
											</p>
										</div>
									</div>
									<div className='info-bar'>
										<p>
											Duration: <span>{item.duration} minutes</span>
										</p>
										<p>
											Phase: <span>{item.phase}</span>
										</p>
										<p>
											Chronology: <span>{item.chronology}</span>
										</p>
									</div>
									<div className='bottom'>
										<h1> Trailer </h1>

										<div className='player'>
											<ReactPlayer
												url={item.trailer}
												width='70vw'
												height='70vh'
												controls={true}
											/>
										</div>

										<h1> Post Credit Scene </h1>
										<div className='player'>
											<ReactPlayer
												url={item.post_credits}
												width='70vw'
												height='70vh'
												controls={true}
											/>
										</div>
									</div>
								</div>
							</>
						);
				})}
			</div>
		</>
	);
}

export default MovieDetails;

//
