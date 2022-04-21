import React, { useState } from 'react';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../Redux';
import './Dropdown.scss';

const YearDropdown = ({ setDate }) => {
	// import dispatch
	const dispatch = useDispatch();
	// import from action-creators.
	const { updateDate } = bindActionCreators(actionCreators, dispatch);

	// state
	const [expand, setExpand] = useState(false);

	// redux
	const getDate = useSelector((state) => state.getDate);

	const year = new Date().getFullYear();
	function changeDate(e) {
		setDate(e);
	}

	return (
		<div className='dropdown' onClick={() => setExpand(!expand)}>
			<div className='active-select'>
				<h1>
					{getDate} <AiFillCaretDown className='down-arrow' />
				</h1>
			</div>

			<div className={expand ? 'expand' : 'shrink'}>
				{Array.from(new Array(50), (v, i) => (
					<div className='option' onClick={() => updateDate(year - i)}>
						<p key={i}>{year - i}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default YearDropdown;
