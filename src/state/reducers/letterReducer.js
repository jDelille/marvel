const letter = (state = 'A', action) => {
	switch (action.type) {
		case 'letter_select':
			return (state = action.payload);
		default:
			return state;
	}
};

export default letter;
