import FavouriteAnimeContext from '../../context/FavouriteAnimeContext'
import { useContext, useEffect } from 'react'
import { TiTimes } from 'react-icons/ti'
import './Controls.css'
function Controls({type, anime}) {

  const {removeAnimeFromFavourite, getFavRef} = useContext(FavouriteAnimeContext)

  const handleDelete = (mal_id) => {
    removeAnimeFromFavourite(mal_id)
  }

  useEffect(() => {
    getFavRef()
  },[anime])

  return (
    <>
    {type === 'favourite' && (
      <div className="remove">
        <button className="remove-btn" onClick={() => handleDelete(anime.mal_id)}><TiTimes className='x-icon'/></button>
      </div>
    )}
    </>
  )
}

export default Controls