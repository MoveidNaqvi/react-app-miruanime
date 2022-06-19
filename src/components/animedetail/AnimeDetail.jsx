import { useContext } from 'react'
import FavouriteAnimeContext from '../../context/FavouriteAnimeContext'
import './AnimeDetail.css'
import { GiPodium } from 'react-icons/gi'
import { AiFillFire} from 'react-icons/ai'
import { MdStarRate, MdDateRange, MdPeople} from 'react-icons/md'
import { FaHeart } from 'react-icons/fa'
import { TiTick } from 'react-icons/ti'
import React from 'react'
import YoutubeEmbed from '../videoembed/YoutubeEmbed'

function AnimeDetail({anime}) {

  const {addAnimeToFavourite, favourites} = useContext(FavouriteAnimeContext)
  let storedAnime = favourites && favourites.find(o => o.mal_id === anime.data.mal_id)


  const favouriteBtnDisabled = storedAnime ? true : false
  return (
    <main>
      <div className='grid-container'>
        <div className="anime cover"><img src={anime.data.images.webp.large_image_url} alt="" className="animeCover" /></div>
        <div className="detail">
          <div className="header">
            <div className="header-title">
              <div>
                <h2>{anime.data.title_english ? anime.data.title_english : anime.data.title}</h2>
                <h3>{anime.data.title_japanese}</h3>
              </div>
              <div className="favourite">
                <button className='favourite-btn' onClick={() => addAnimeToFavourite(anime.data)} disabled={favouriteBtnDisabled}><FaHeart className={favouriteBtnDisabled ? 'favourite-icon disabled' : 'favourite-icon'} size={28}/></button>
              </div>
            </div>
            <p><strong>Synopsis: </strong>{anime.data.synopsis?.replace('[Written by MAL Rewrite]', '')}</p>
            <div className="anime-type"><p><strong>Type: </strong>{anime.data.type}</p></div>
            <p><strong>Episodes: </strong>{anime.data.episodes}</p>
            <div className="genres">
              <ul>
                {anime.data.genres.map(genre => (
                  <li key={genre.mal_id}>{genre.name}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="stats">
          <ul className="statistics">
            <li><div className="statistics-li">
                <div className="text">
                  <p>Rank</p>
                  <p>{anime.data.rank ? anime.data.rank : <p>Unavailable</p>}</p>
                </div>
                <div className="icon rank">
                  <GiPodium size={40}/>
                </div>
              </div></li>
              <li><div className="statistics-li">
                <div className="text">
                  <p>Popularity</p>
                  <p>{anime.data.popularity ? anime.data.popularity : <p>Unavailable</p>}</p>
                </div>
                <div className="icon fire">
                  <AiFillFire size={40}/>
                </div>
              </div></li>
              <li><div className="statistics-li">
                <div className="text">
                  <p>Score</p>
                  <p>{anime.data.score ? anime.data.score : <p>Unavailable</p>}</p>
                </div>
                <div className="icon star">
                  <MdStarRate size={40}/>
                </div>
              </div></li>
              <li><div className="statistics-li">
                <div className="text">
                  <p>Release Year</p>
                  <p>{anime.data.year ? anime.data.year : <p>Unavailable</p>}</p>
                </div>
                <div className="icon calendar">
                  <MdDateRange size={40}/>
                </div>
              </div></li>
              <li><div className="statistics-li">
                <div className="text">
                  <p>Members</p>
                  <p>{anime.data.members ? anime.data.members : <p>Unavailable</p>}</p>
                </div>
                <div className="icon members">
                  <MdPeople size={40}/>
                </div>
              </div></li>
              <li><div className="statistics-li">
                <div className="text">
                  <p>Status</p>
                  <p>{anime.data.status ? anime.data.status : <p>Unavailable</p>}</p>
                </div>
                <div className="icon tick">
                  <TiTick size={40}/>
                </div>
              </div></li>
          </ul>
        </div>
        <div className="trailer">
          <div className="trailer-box">
            <YoutubeEmbed embedId={anime.data.trailer.youtube_id}/>
          </div>
        </div>
      </div>
    </main>
  )
}

export default AnimeDetail