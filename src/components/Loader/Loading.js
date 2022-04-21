import React from 'react';
import { useRive } from 'rive-react';
import Loader from './Loader.riv';
import './Loading.scss';
const Loading = ({ loading }) => {
	const { rive, RiveComponent } = useRive({
		src: Loader,
		animations: 'walk',
		autoplay: true,
	});

	return (
		<div className='loading-container'>
			<RiveComponent className='animation' />
			<h1> Loading... </h1>
		</div>
	);
};

export default Loading;
