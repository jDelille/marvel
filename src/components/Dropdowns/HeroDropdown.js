import React, { useState } from 'react';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';
import './Dropdown.scss';
const HeroDropdown = ({ setCharacter }) => {
	let heros = [
		{
			id: 1009165,
			name: 'Avengers',
			icon: '../images/avengers.png',
		},
		{
			id: 1009368,
			name: 'Iron Man',
			icon: '../images/ironman.png',
		},
		{
			id: 1009220,
			name: 'Captain America',
			icon: '../images/cap.png',
		},
		{
			id: 1009282,
			name: 'Doctor Strange',
			icon: '../images/dr.png',
		},
		{
			id: 1009664,
			name: 'Thor',
			icon: '../images/thor.png',
		},
		{
			id: 1011054,
			name: 'Spider-Man',
			icon: '../images/spider.png',
		},
		{
			id: 1009351,
			name: 'Hulk',
			icon: '../images/hulk.png',
		},
	];

	const [hero, setHero] = useState('');
	const [expand, setExpand] = useState(false);
	const [icon, setIcon] = useState('');
	function changeHero(hero) {
		setCharacter(hero.id);
		setHero(hero.name);
		setExpand(false);
		setIcon(hero.icon);
	}

	return (
		<>
			<div className='dropdown' onClick={() => setExpand(!expand)}>
				{!hero ? (
					<div className='active-select'>
						<h1>
							Select a hero <AiFillCaretDown className='down-arrow' />
						</h1>
					</div>
				) : (
					<div className='active-select'>
						<div className='hero-name-icon'>
							<img src={icon} alt='' />
							<h1>{hero}</h1>
						</div>

						{!expand ? (
							<AiFillCaretDown className='down-arrow' />
						) : (
							<AiFillCaretUp className='up-arrow' />
						)}
					</div>
				)}
			</div>
			<div className={expand ? 'expand' : 'shrink'}>
				{heros.map((item) => {
					if (item.name !== hero)
						return (
							<div className='option' onClick={() => changeHero(item)}>
								<img src={item.icon} alt='' />
								<p>{item.name}</p>
							</div>
						);
				})}
			</div>
		</>
	);
};

export default HeroDropdown;
