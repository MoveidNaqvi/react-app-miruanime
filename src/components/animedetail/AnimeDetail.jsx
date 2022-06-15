import './AnimeDetail.css'
import { GiPodium } from 'react-icons/gi'
import { AiFillFire} from 'react-icons/ai'
import { MdStarRate, MdDateRange, MdPeople, MdKeyboardBackspace } from 'react-icons/md'
import { TiTick } from 'react-icons/ti'
import React from 'react'
import { Link } from 'react-router-dom'
import YoutubeEmbed from '../videoembed/YoutubeEmbed'

function AnimeDetail({anime}) {
  return (
    <main>
      <div className='grid-container'>
        <div className="anime cover"><img src={anime.data.images.webp.large_image_url} alt="" className="animeCover" /></div>
        <div className="detail">
          <div className="header">
            <div className="header-title">
              <div>
                <h2>{anime.data.title_english}</h2>
                <h3>{anime.data.title_japanese}</h3>
            </div>
            <div className="back-btn">
              <Link to='/'><MdKeyboardBackspace size={50} className='back-link'/></Link>
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
                  <p>{anime.data.rank}</p>
                </div>
                <div className="icon rank">
                  <GiPodium size={40}/>
                </div>
              </div></li>
              <li><div className="statistics-li">
                <div className="text">
                  <p>Popularity</p>
                  <p>{anime.data.popularity}</p>
                </div>
                <div className="icon fire">
                  <AiFillFire size={40}/>
                </div>
              </div></li>
              <li><div className="statistics-li">
                <div className="text">
                  <p>Score</p>
                  <p>{anime.data.score}</p>
                </div>
                <div className="icon star">
                  <MdStarRate size={40}/>
                </div>
              </div></li>
              <li><div className="statistics-li">
                <div className="text">
                  <p>Release Year</p>
                  <p>{anime.data.year}</p>
                </div>
                <div className="icon calendar">
                  <MdDateRange size={40}/>
                </div>
              </div></li>
              <li><div className="statistics-li">
                <div className="text">
                  <p>Members</p>
                  <p>{anime.data.members}</p>
                </div>
                <div className="icon members">
                  <MdPeople size={40}/>
                </div>
              </div></li>
              <li><div className="statistics-li">
                <div className="text">
                  <p>Status</p>
                  <p>{anime.data.status}</p>
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