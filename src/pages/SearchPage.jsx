import {useSearchParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import './SearchPage.css'
import Spinner from '../components/spinner/Spinner'
import Error from './Error'
import AnimeList from '../components/animelist/AnimeList'

function SearchPage() {

  // eslint-disable-next-line
  const [searchParams, setSearchParams] = useSearchParams({})
  const query = searchParams.get('searchreq')
  const {data, isPending, error} = useFetch(`https://api.jikan.moe/v4/anime?q=${query}&sfw`)
  return (
    <div className='home'>
      {error && <Error/>}
      {isPending && <Spinner/>}
      {data && <AnimeList animelist={data}/>}
    </div>
  )
}

export default SearchPage