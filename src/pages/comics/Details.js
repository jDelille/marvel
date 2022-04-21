import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Overlay from '../../Components/Overlay/Overlay';
import '../../Styles//Details.scss';
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

	console.log(comicId);

	console.log(details);

	// layout will go...
	// name
	// creators
	// cover artist or featured characters.
	// description

	return (
		<>
			<div className='details page'>
				<div className='control-bar'>
					<Link to='/' className='back-btn'>
						Back
					</Link>
					<a href='https://www.marvel.com/' target='_blank' rel='noreferrer'>
						Go To Marvel.com
					</a>
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
									{/* name */}
									<div className='title'>
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
													creator.role === 'penciller (cover)'
												)
													return <p key={item.digital_id}>{creator.name}</p>;
											})}
										</div>
									</div>

									<div className='info'></div>
									{/* featured characters */}
									<h2> Featured Characters: </h2>
									<div className='characters'>
										{item.characters.items.map((characters) => {
											return <p>{characters.name}</p>;
										})}
									</div>
									{/* description */}
									{item.description && (
										<div className='description'>
											<p>
												{item.description
													.replace(/<\/?([a-z][a-z0-9]*)\b[^>]*>/gi, ' ')
													.replace(/&rsquo;/gi, "'")}
											</p>
										</div>
									)}
								</div>
							</div>
						</>
					);
				})}
			</div>
			{/* SHOW RELATED COMICS */}
			{/* <Related /> */}
		</>
	);
}

export default Details;

//
