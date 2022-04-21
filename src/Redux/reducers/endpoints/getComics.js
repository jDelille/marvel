// marvel api auth
let ts = process.env.REACT_APP_TIMESTAMP;
let apiKey = process.env.REACT_APP_API_KEY;
let hash = process.env.REACT_APP_HASH;

const getComics = (
	state = `/comics?ts=${ts}&apikey=${apiKey}&hash=${hash}`,
	action
) => {
	switch (action.type) {
		case 'getComics':
			return (state = action.payload);
		default:
			return state;
	}
};

export default getComics;
