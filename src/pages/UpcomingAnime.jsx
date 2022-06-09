import Header from "../Header"
import { useFetch } from '../hooks/useFetch'
import Error from "./Error"
import Spinner from "../components/spinner/Spinner"
import AnimeList from "../components/animelist/AnimeList"
import './UpcomingAnime.css'

function UpcomingAnime() {

  const {data, isPending, error} = useFetch('https://api.jikan.moe/v4/seasons/upcoming')
  return (
    <div className="upcoming-anime">
      <Header/>
      {error && <Error/>}
      {isPending && <Spinner/>}
      {data && <h1>Upcoming Anime</h1>}
      {data && <AnimeList animelist={data}/>}
    </div>
  )
}

export default UpcomingAnime