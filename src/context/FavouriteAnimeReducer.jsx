const favouriteAnimeReducer = (state, action) => {
  switch(action.type) {

    case 'ADD_ANIME_TO_FAVOURITE':
      return{
        favourites: action.payload
      }
    case 'REMOVE_ANIME_FROM_FAVOURITE':
      return{
        favourites: null
      }

    default:
      return state;
  }
}

export default favouriteAnimeReducer