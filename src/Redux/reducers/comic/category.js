const category = (state = '', action) => {
	switch (action.type) {
		case 'category':
			return (state = action.payload);
		default:
			return state;
	}
};

export default category;
