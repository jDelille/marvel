import React from 'react';
import './Alphabet.scss';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state';

const Alphabet = () => {
	// import dispatch
	const dispatch = useDispatch();
	// import from action-creators.
	const { changeLetter } = bindActionCreators(actionCreators, dispatch);

	const alpha = Array.from(Array(26)).map((e, i) => i + 65);
	const alphabet = alpha.map((x) => String.fromCharCode(x));

	let letters = document.querySelectorAll('.letter');

	letters.forEach((button) => {
		//set click event
		button.addEventListener('click', function () {
			//remove all the active class from buttons
			letters.forEach((oldLetter) => {
				oldLetter.classList.remove('active');
			});
			//append the active class to the new clicked button
			this.classList.add('active');
		});
	});

	return (
		<div className='alphabet-container'>
			{alphabet.map((item) => {
				return (
					<button className='letter' onClick={() => changeLetter(item)}>
						{item}
					</button>
				);
			})}
		</div>
	);
};

export default Alphabet;
