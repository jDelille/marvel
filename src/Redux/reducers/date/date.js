const getDate = (state = 2022, action) => {
	switch (action.type) {
		case 'getDate':
			return (state = action.payload);
		default:
			return state;
	}
};

export default getDate;
