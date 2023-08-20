import React from 'react'
import AnimeList from '../components/animelist/AnimeList'
import { useLoaderData} from 'react-router-dom'
import './Home.css'
import Dropdown from "../components/dropdown/Dropdown";

function Home() {
  const anime = useLoaderData()
  return (
    <div className='home'>
      <Dropdown/>
      <h1 className=' text-3xl font-bold'>Airing Anime</h1>
      <AnimeList animelist={anime}/>
    </div>
  )
}

export default Home

// loader function

export const animeLoader = async () => {
  const res = await fetch(
    "https://api.jikan.moe/v4/top/anime?type=tv&filter=airing"
  );
  if (!res.ok) {
    throw Error("Could not fetch anime");
  }
  return res.json()
}