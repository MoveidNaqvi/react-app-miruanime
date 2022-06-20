import {useParams} from 'react-router-dom'
import AnimeDetail from '../components/animedetail/AnimeDetail'
import Spinner from '../components/spinner/Spinner'
import { useFetch } from '../hooks/useFetch'
import './Anime.css'
import Error from './Error'

function Anime() {
  
  const {id} = useParams()
  const {data, isPending, error} = useFetch(`https://api.jikan.moe/v4/anime/${id}/full`)
  return (
    <div className='anime'>
      {error && <Error/>}
      {isPending && <Spinner/>}
      {data && <AnimeDetail anime={data}/>}
    </div>
  )
}

export default Anime