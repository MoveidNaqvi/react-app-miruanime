import {Link} from 'react-router-dom'
import Controls from '../favouriteAnimeControls/Controls'

function AnimeList({animelist, type}) {

  if( animelist.data.length === 0){
    return <div className="no-anime">
      <h1 className='text-2xl'>No anime found!</h1>
    </div>
  }

  return (
    <>
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {animelist.data.map((item) => (
          <div
            className="relative group rounded-2xl overflow-hidden w-[200px] shadow-xl"
            key={item.mal_id}
          >
            <Link to={`/anime/${item.mal_id}`}>
              <img
                src={item.images.webp.large_image_url}
                alt=""
                className="w-full h-full object-center"
              />
            </Link>
            <Controls type={type} anime={item} />
            <div className="absolute bottom-0 left-0 right-0 p-2 text-white bg-cyan-500 opacity-0 group-hover:opacity-100 duration-300">
              <h3 className="text-white">
                {item.title_english ? item.title_english : item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="anime-container">
        <div className='anime-list'>
          {animelist.data.map(item => (
            <div className="anime-card" key={item.mal_id}>
              <div className="anime-img">
                <Link to={`/anime/${item.mal_id}`}>
                  <img src={item.images.webp.large_image_url} className='anime-cover' alt="Anime"/>
                </Link>
              </div>
              <Controls type={type} anime={item}/>
              <div className="anime-overview">
                <h3>{item.title_english ? item.title_english : item.title }</h3>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </>
  );
}

export default AnimeList