const charURL = (state = '', action) => {
	switch (action.type) {
		case 'charURL':
			return (state = action.payload);
		default:
			return state;
	}
};

export default charURL;
