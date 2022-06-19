import {Link} from 'react-router-dom'
import Controls from '../favouriteAnimeControls/Controls'
import './AnimeList.css'

function AnimeList({animelist, type}) {

  if( animelist.data.length === 0){
    return <div className="no-anime">
      <h1>No anime found!</h1>
    </div>
  }

  return (
    <>
      <div className="anime-container">
        <div className='anime-list'>
          {animelist.data.map(item => (
            <div className="anime-card" key={item.mal_id}>
              <div className="anime-img">
                <Link to={`/anime/${item.mal_id}`}>
                  <img src={item.images.webp.large_image_url} className='anime-cover' alt="Anime"/>
                </Link>
              </div>
              <Controls type={type}/>
              <div className="anime-overview">
                <h3>{item.title_english ? item.title_english : item.title }</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default AnimeList