import { useFetch } from '../hooks/useFetch'
import Error from "./Error"
import Spinner from "../components/spinner/Spinner"
import AnimeList from "../components/animelist/AnimeList"
import Header from '../Header'
import './TopAnime.css'
function TopAnime() {

  const {data, isPending, error} = useFetch('https://api.jikan.moe/v4/top/anime')

  return (
    <div className="top-anime">
    <Header/>
    {error && <Error/>}
    {isPending && <Spinner/>}
    {data && <h1>Top Anime</h1>}
    {data && <AnimeList animelist={data}/>}
  </div>
  )
}

export default TopAnime