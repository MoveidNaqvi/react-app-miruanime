const favouriteAnimeReducer = (state, action) => {
  switch(action.type) {

    case 'ADD_ANIME_TO_FAVOURITE':
      return{
        ...state,
        favourites: [action.payload, ...state.favourites]
      }
    case 'REMOVE_ANIME_FROM_FAVOURITE':
      return{
        ...state,
        favourites: state.favourites.filter(favourite => favourite.mal_id !== action.payload)
      }

    default:
      return state;
  }
}

export default favouriteAnimeReducer