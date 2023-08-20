import AnimeDetail from '../components/animedetail/AnimeDetail'
import Spinner from '../components/spinner/Spinner'
import { useLoaderData } from 'react-router-dom'
import Error from './Error'

function Anime() {
  const anime = useLoaderData()
  return (
    <div className='anime'>
      {/* {error && <Error/>}
      {isPending && <Spinner/>} */}
      <AnimeDetail anime={anime}/>
    </div>
  )
}

export default Anime

export const animeDetailsLoader = async ({ params }) => {
  const { id } = params
  const res = await fetch(`https://api.jikan.moe/v4/anime/${id}/full`)
  if(!res.ok) {
    throw Error('Could not find that anime')
  }
  return res.json()
}