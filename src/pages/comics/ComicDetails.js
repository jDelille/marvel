import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Overlay from '../../components/Overlay/Overlay';
import { AiOutlineLeft } from 'react-icons/ai';
import moment from 'moment';
import './ComicDetails.scss';

function Details() {
	const [details, setDetails] = useState([]);

	let ts = process.env.REACT_APP_TIMESTAMP;
	let apiKey = process.env.REACT_APP_API_KEY;
	let hash = process.env.REACT_APP_HASH;

	const comicId = useSelector((state) => state.comicId);
	const category = useSelector((state) => state.category);

	useEffect(() => {
		fetch(
			`https://gateway.marvel.com/v1/public/comics/${comicId}?ts=${ts}&apikey=${apiKey}&hash=${hash}`
		)
			.then((res) => res.json())
			.then((data) => {
				setDetails(data.data.results);
			});
	}, [comicId]);

	function copyUPC(text) {
		navigator.clipboard.writeText(text);
	}

	return (
		<>
			<div className='details page'>
				<div className='control-bar'>
					<Link to='/' className='back-btn'>
						<AiOutlineLeft className='left-arrow' />
						{category}
					</Link>
				</div>
				{/* COMIC HEADER OVERLAY */}
				<Overlay details={details} />
				{details.map((item) => {
					return (
						<>
							<div className='comic-content' key={item.id}>
								<div className='left'>
									{/* show name on mobile */}
									<div className='title mobile'>
										<h1> {item.title} </h1>
									</div>
									<img
										className='comic-img-lg'
										src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
										alt={item.title}
									/>
								</div>
								<div className='right'>
									{/* hide name on desktop */}
									<div className='title desktop'>
										<h1> {item.title} </h1>
									</div>
									{/* creators */}
									<div className='info'>
										<div className='writer'>
											<h2>Writer:</h2>
											{item.creators.items.map((creator, index) => {
												if (creator.role === 'writer')
													return <p key={item.digital_id}>{creator.name}</p>;
											})}
										</div>
										<div className='penciller'>
											<h2>Penciller:</h2>
											{item.creators.items.map((creator, index) => {
												if (
													creator.role === 'penciller' ||
													creator.role === 'penciler' ||
													creator.role === 'penciller (cover)' ||
													creator.role === 'penciler (cover)'
												)
													return <p key={item.digital_id}>{creator.name}</p>;
											})}
										</div>
									</div>

									{/* comic price */}
									{/* {item.prices.map((item) => {
										return <p>Price: ${item.price} </p>;
									})} */}

									{/* featured characters */}
									{item.characters.length > 1 && (
										<>
											<h2> Featured Characters: </h2>
											<div className='characters'>
												{item.characters.items.map((characters) => {
													return <p>{characters.name}</p>;
												})}
											</div>
										</>
									)}

									{/* show published date on mobile */}
									<div className='published'>
										<h1>Published</h1>
										<p>{moment(item.modified).format('MMMM Do YYYY')}</p>
									</div>

									{/* show price on mobile */}
									<div className='price'>
										{item.prices.map((item) => {
											return item.price !== 0 ? (
												<>
													<h2>Price:</h2>
													<p> ${item.price} </p>
												</>
											) : (
												<>
													<h2>Price:</h2>
													<p>Unavailable </p>
												</>
											);
										})}
									</div>

									{/* description */}
									<div className='description'>
										{item.description ? (
											<p>
												{item.description
													.replace(/<\/?([a-z][a-z0-9]*)\b[^>]*>/gi, ' ')
													.replace(/&rsquo;/gi, "'")}
											</p>
										) : (
											<p>No description available.</p>
										)}
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

export default Details;

//
