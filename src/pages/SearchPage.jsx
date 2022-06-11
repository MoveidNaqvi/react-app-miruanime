import {useSearchParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import './SearchPage.css'
import Spinner from '../components/spinner/Spinner'
import Error from './Error'
import AnimeList from '../components/animelist/AnimeList'
import { useState } from 'react'
import { useEffect } from 'react'
import AnimePagination from '../components/pagination/AnimePagination'

function SearchPage() {

  const [searchAnime, setSearchAnime] = useState([])
  const [page, setPage] = useState(1)
  const [numberOfPages, setNumberOfPages] = useState(0)
  // eslint-disable-next-line
  const [searchParams, setSearchParams] = useSearchParams({})
  const query = searchParams.get('searchreq')
  const {data, isPending, error} = useFetch(`https://api.jikan.moe/v4/anime?q=${query}&sfw&page=${page}`)
  useEffect(() => {
    setSearchAnime(data)
    setNumberOfPages(data && Math.ceil(data.pagination.items.total / 25))
  }, [setSearchAnime, data, page]);
  return (
    <div className='home'>
      {error && <Error/>}
      {isPending && <Spinner/>}
      {data && <AnimeList animelist={data}/>}
      {data && searchAnime && <AnimePagination setPage={setPage} numberOfPages={numberOfPages}/>}
    </div>
  )
}

export default SearchPage