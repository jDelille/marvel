const char = (state = 0, action) => {
	switch (action.type) {
		case 'character':
			return (state = action.payload);
		default:
			return state;
	}
};

export default char;
