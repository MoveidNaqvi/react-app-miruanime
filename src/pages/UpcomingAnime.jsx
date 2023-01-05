import { useFetch } from '../hooks/useFetch'
import Error from "./Error"
import Spinner from "../components/spinner/Spinner"
import AnimeList from "../components/animelist/AnimeList"
import { useState } from 'react'
import { useEffect } from 'react'
import AnimePagination from '../components/pagination/AnimePagination'
import Dropdown from "../components/dropdown/Dropdown";

function UpcomingAnime() {

  const [upcomingAnime, setUpcomingAnime] = useState([])
  const [page, setPage] = useState(1)
  const [numberOfPages, setNumberOfPages] = useState(0)
  const {data, isPending, error} = useFetch(`https://api.jikan.moe/v4/seasons/upcoming?page=${page}`)
  useEffect(() => {
    setUpcomingAnime(data)
    setNumberOfPages(data && Math.ceil(data.pagination.items.total / 25))
  }, [setUpcomingAnime, data, page]);
  return (
    <div className="upcoming-anime">
      {error && <Error />}
      {isPending && <Spinner />}
      {data && <Dropdown />}
      {data && (
        <h1 className="text-3xl font-bold text-white text-center mb-4">
          Upcoming Anime
        </h1>
      )}
      {data && <AnimeList animelist={data} />}
      {data && upcomingAnime && (
        <AnimePagination setPage={setPage} numberOfPages={numberOfPages} />
      )}
    </div>
  );
}

export default UpcomingAnime