import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Related from '../components/Related/Related';
import Overlay from '../components/Overlay/Overlay';
import { Link } from 'react-router-dom';
import '../styles/Details.scss';

function Details() {
	const [details, setDetails] = useState([]);

	let ts = process.env.REACT_APP_TIMESTAMP;
	let apiKey = process.env.REACT_APP_API_KEY;
	let hash = process.env.REACT_APP_HASH;

	const comicId = useSelector((state) => state.comicId);

	useEffect(() => {
		fetch(
			`https://gateway.marvel.com/v1/public/comics/${comicId}?ts=${ts}&apikey=${apiKey}&hash=${hash}`
		)
			.then((res) => res.json())
			.then((data) => {
				setDetails(data.data.results);
			});
	}, [comicId]);

	return (
		<>
			<div className='details page'>
				<div className='control-bar'>
					<Link to='/comics' className='back-btn'>
						Back
					</Link>
				</div>
				{/* COMIC HEADER OVERLAY */}
				<Overlay details={details} />
				{details.map((item) => {
					return (
						<>
							<div className='comic-content' key={item.id}>
								<div className='left'>
									<img
										className='comic-img-lg'
										src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
										alt={item.title}
									/>
								</div>
								<div className='right'>
									<div className='title'>
										<h1> {item.title} </h1>
									</div>
									{item.description && (
										<div className='description'>
											<h2> Description: </h2>
											<p>
												{item.description
													.replace(/<\/?([a-z][a-z0-9]*)\b[^>]*>/gi, ' ')
													.replace(/&rsquo;/gi, "'")}
											</p>
										</div>
									)}

									<h2>Creators:</h2>
									<div className='info'>
										{item.creators.items.map((creator, index) => {
											if (
												creator.role === 'writer' ||
												creator.role === 'penciler'
											)
												return (
													<p key={item.digital_id}>
														{creator.name}: {creator.role}
													</p>
												);
										})}
									</div>
									<h2> Featured Characters: </h2>
									<div className='characters'>
										{item.characters.items.map((characters) => {
											return <p>{characters.name}</p>;
										})}
									</div>
									<div className='comic-info-box'>
										<h1>Pages: {item.pageCount}</h1>
										<h1>Price: ${item.prices[0].price}</h1>
									</div>
								</div>
							</div>
						</>
					);
				})}
			</div>
			{/* SHOW RELATED COMICS */}
			<Related />
		</>
	);
}

export default Details;
