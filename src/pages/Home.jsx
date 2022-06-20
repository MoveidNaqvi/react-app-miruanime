import React from 'react'
import AnimeList from '../components/animelist/AnimeList'
import { useFetch } from '../hooks/useFetch'
import Spinner from '../components/spinner/Spinner'
import './Home.css'
import Error from './Error'
import Header from '../Header'
import { useState } from 'react'
import { useEffect } from 'react'
import AnimePagination from '../components/pagination/AnimePagination'

function Home() {

  const [airingAnime, setAiringAnime] = useState([])
  const [page, setPage] = useState(1)
  const [numberOfPages, setNumberOfPages] = useState(0)
  const {data, isPending, error} = useFetch(`https://api.jikan.moe/v4/top/anime?type=tv&filter=airing&page=${page}`)
  useEffect(() => {
    setAiringAnime(data)
    setNumberOfPages(data && Math.ceil(data.pagination.items.total / 25))
  }, [setAiringAnime, data, page]);

  return (
    <div className='home'>
      <Header/>
      {error && <Error/>}
      {isPending && <Spinner/>}
      {data && <h1>Airing Anime</h1>}
      {data && <AnimeList animelist={data}/>}
      {data && airingAnime && <AnimePagination setPage={setPage} numberOfPages={numberOfPages}/>}
    </div>
  )
}

export default Home