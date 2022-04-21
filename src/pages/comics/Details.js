import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Overlay from '../../Components/Overlay/Overlay';
import { MdOutlineCopyAll } from 'react-icons/md';
import '../../Styles//Details.scss';
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
						Back to {category}
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
													creator.role === 'penciller (cover)' ||
													creator.role === 'penciler (cover)'
												)
													return <p key={item.digital_id}>{creator.name}</p>;
											})}
										</div>
									</div>

									{/* comic extra info */}
									<h2>
										Search for this comic online:
										<span>
											{item.upc}
											<MdOutlineCopyAll
												className='copy-btn'
												onClick={() => copyUPC(item.upc)}
											/>
										</span>
									</h2>

									{/* comic price */}
									{item.prices.map((item) => {
										return <h2>Price: ${item.price} </h2>;
									})}

									{/* marvel urls */}
									{/* {item.urls.map((item) => {
										return (
											<a href={item.url} target='_blank' rel='noreferrer'>
												{' '}
												More Info{' '}
											</a>
										);
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
