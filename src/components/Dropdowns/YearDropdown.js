import React, { useState } from 'react';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';
import './Dropdown.scss';

const YearDropdown = ({ setDate, date }) => {
	const [expand, setExpand] = useState(false);

	const year = new Date().getFullYear();
	function changeDate(e) {
		setDate(e);
	}

	return (
		<div className='dropdown' onClick={() => setExpand(!expand)}>
			<div className='active-select'>
				<h1>
					Year: {date} <AiFillCaretDown className='down-arrow' />
				</h1>
			</div>

			<div className={expand ? 'expand' : 'shrink'}>
				{Array.from(new Array(50), (v, i) => (
					<div className='option' onClick={() => changeDate(year - i)}>
						<p key={i}>{year - i}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default YearDropdown;
