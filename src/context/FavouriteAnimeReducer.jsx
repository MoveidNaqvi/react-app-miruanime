const favouriteAnimeReducer = (state, action) => {
  switch(action.type) {

    case 'ADD_ANIME_TO_FAVOURITE':
      return{
        ...state,
        favourites: [action.payload, ...state.favourites]
      }

    default:
      return state;
  }
}

export default favouriteAnimeReducer