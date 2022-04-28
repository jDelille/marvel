import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { AiFillCaretRight } from 'react-icons/ai';
import '../../styles/MovieDetails.scss';
import data from '../../components/db.json';
import MovieOverlay from '../../components/Overlay/MovieOverlay';
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

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [details]);

	return (
		<>
			<div className='movie-details page'>
				<div className='control-bar'>
					<Link to='/movies' className='back-btn'>
						Back
					</Link>
				</div>
				{/* <MovieOverlay details={overlay} /> */}
				{details.map((item) => {
					if (item.id === movieId)
						return (
							<>
								<div className='comic-content' key={item.id}>
									<div className='top'>
										<MovieOverlay details={overlay} />
										<img
											className='comic-img-lg desktop'
											src={item.logo}
											alt=''
										/>
										<img
											className='comic-img-lg mobile'
											src={item.logo}
											alt=''
										/>
									</div>
									<div className='middle'>
										<div className='left'>
											<img src={item.poster_img} className='desktop' alt='' />
										</div>
										<div className='right'>
											<h1>{item.title}</h1>
											<p> {item.date}</p>
											<p>Director: {item.director}</p>
											<p>{item.description}</p>
											<p className='next-movie'>
												Next Movie
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
										<p className='desktop'>
											Phase: <span>{item.phase}</span>
										</p>
										<p>
											Chronology: <span>{item.chronology}</span>
										</p>
									</div>
									<div className='bottom'>
										<h1> Trailer </h1>

										<div className='player'>
											<ReactPlayer url={item.trailer} controls={true} />
										</div>

										<h1> Post Credit Scene </h1>
										<div className='player'>
											<ReactPlayer url={item.post_credits} controls={true} />
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
