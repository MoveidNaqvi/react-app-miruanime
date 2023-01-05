import { useFetch } from '../hooks/useFetch'
import Error from "./Error"
import Spinner from "../components/spinner/Spinner"
import AnimeList from "../components/animelist/AnimeList"
import { useState } from 'react'
import { useEffect } from 'react'
import AnimePagination from '../components/pagination/AnimePagination'
import Dropdown from "../components/dropdown/Dropdown";
function TopAnime() {
  
  const [topAnime, setTopAnime] = useState([])
  const [page, setPage] = useState(1)
  const [numberOfPages, setNumberOfPages] = useState(0)
  const {data, isPending, error} = useFetch(`https://api.jikan.moe/v4/top/anime?type=tv&page=${page}`)
  useEffect(() => {
    setTopAnime(data)
    setNumberOfPages(data && Math.ceil(data.pagination.items.total / 25))
  }, [setTopAnime, data, page]);

  return (
    <div className="top-anime">
      {error && <Error />}
      {isPending && <Spinner />}
      {data && <Dropdown />}
      {data && topAnime && (
        <h1 className="text-3xl font-bold text-white text-center mb-4">
          Top Anime
        </h1>
      )}
      {data && topAnime && <AnimeList animelist={topAnime} />}
      {data && topAnime && (
        <AnimePagination setPage={setPage} numberOfPages={numberOfPages} />
      )}
    </div>
  );
}

export default TopAnime