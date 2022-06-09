import React from 'react'
import AnimeList from '../components/animelist/AnimeList'
import { useFetch } from '../hooks/useFetch'
import Spinner from '../components/spinner/Spinner'
import './Home.css'
import Error from './Error'
import Header from '../Header'

function Home() {

  const {data, isPending, error} = useFetch('https://api.jikan.moe/v4/seasons/now')

  return (
    <div className='home'>
      <Header/>
      {error && <Error/>}
      {isPending && <Spinner/>}
      {data && <h1>Airing Anime</h1>}
      {data && <AnimeList animelist={data}/>}
    </div>
  )
}

export default Home