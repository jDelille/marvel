const comics = (state = [], action) => {
 switch (action.type) {
   case "comics":
     return (state = action.payload);
   default:
     return state;
 }
};

export default comics;
