import React from 'react';
import HeroDropdown from '../../Dropdowns/HeroDropdown';
import YearDropdown from '../../Dropdowns/YearDropdown';

const Controls = ({ setCharacter }) => {
	return (
		<div className='control-bar'>
			<HeroDropdown setCharacter={setCharacter} />
			<YearDropdown />
		</div>
	);
};

export default Controls;
