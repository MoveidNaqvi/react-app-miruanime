import { useContext, useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { toast } from 'react-toastify'
import FavouriteAnimeContext from '../../context/FavouriteAnimeContext'
import useAuthStatus from '../../hooks/useAuthStatus'
import { GiPodium } from 'react-icons/gi'
import { MdDateRange, MdLocalFireDepartment} from 'react-icons/md'
import { FaHeart, FaStar } from 'react-icons/fa'
import { BsCloudSun } from 'react-icons/bs'
import { BiMoviePlay } from 'react-icons/bi'
import YoutubeEmbed from '../videoembed/YoutubeEmbed'
import { doc, getDoc} from 'firebase/firestore'
import { auth, db } from '../../firebase/config'

function AnimeDetail({anime}) {

  const {loggedIn} = useAuthStatus()
  let { id } = useParams()

  const {addAnimeToFavourite, getFavRef} = useContext(FavouriteAnimeContext)
  const [favouriteBtnDisabled, setfavouriteBtnDisabled] = useState(null)
  // let storedAnime = favourites && favourites.find(o => o.mal_id === anime.data.mal_id)

  const handleFavAnime = (favanime) => {
    getFavRef()
    addAnimeToFavourite(favanime)
    getDocRef()
    toast.success('Anime added to favourites!', {
      autoClose: 1500,
      pauseOnHover: false,
    })
  }
 
  // useEffect(() => {
  //   window.scroll(0,0)
  //   if(auth.currentUser != null){
  //     const ref = doc(db, 'users', auth.currentUser.uid)
  //     const unsub = onSnapshot(ref, (snapshot) => {
  //       if(snapshot.data()){
  //         setfavouriteBtnDisabled(true)
  //       }
  //       else{
  //         setfavouriteBtnDisabled(false)
  //       }
  //     })
  //     return unsub
  //   }
  // },[id, setfavouriteBtnDisabled])
  // const docRef = collection(db, 'users')
  // const q = query(docRef, where('animeID', 'array-contains', parseInt(id)))
  // onSnapshot(q, (snapshot) => {
  //   let results = []
  //   snapshot.docs.forEach((doc) => {
  //     results.push({...doc.data(), id: doc.id})
  //   })
  //   if(results.length > 0){
  //     setfavouriteBtnDisabled(true)
  //   }
  //   else{
  //     setfavouriteBtnDisabled(false)
  //   }
  // }, (error) => {
  //   console.log(error)
  // })
  const getDocRef = async () => {
    if(loggedIn){
    const docRef = doc(db, "users", auth.currentUser.uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const animeID = docSnap.data().animeID
      if(animeID.includes(parseInt(id))){
        setfavouriteBtnDisabled(true)
      }
      else{
        setfavouriteBtnDisabled(false)
      }
      // animeID.map(aID => {
      //   if(aID === parseInt(id)){
      //     setfavouriteBtnDisabled(true)
      //   }
      // })
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }
}

  useEffect(() => {
    getFavRef()
    getDocRef()
  },[loggedIn])

  

  
  


  // const favouriteBtnDisabled = storedAnime ? true : false
  return (
    <main>
      <section className="bg-[#393e46] rounded-lg text-white m-4">
        <div className="lg:flex">
          <img
            src={anime.data.images.webp.large_image_url}
            alt=""
            className="rounded-t-xl w-full h-full md:w-auto md:rounded-lg md:mx-auto md:mt-4 lg:mt-0 lg:w-full lg:h-full lg:rounded-none lg:mx-0 lg:rounded-tl-lg lg:rounded-br-lg"
          />
          <div className="p-4">
            <div className="flex justify-between items-center">
              <h2 className="font-bold text-xl tracking-wide">
                {anime.data.title_english
                  ? anime.data.title_english
                  : anime.data.title}
              </h2>
              {loggedIn && favouriteBtnDisabled != null && (
              <button
                className="bg-[#222831] p-2 rounded-lg"
                onClick={() => handleFavAnime(anime.data)}
                disabled={favouriteBtnDisabled}
              >
                <FaHeart
                  className={
                    favouriteBtnDisabled
                      ? "text-red-700 transition-all duration-200"
                      : "favourite-icon"
                  }
                  size={28}
                />
              </button>
              )}
            </div>
            <h3 className="text-lg">{anime.data.title_japanese}</h3>
            <div className="text-lg">
              <p>
                <span className="font-bold tracking-wider">Synopsis: </span>
                {anime.data.synopsis?.replace("[Written by MAL Rewrite]", "")}
              </p>
              <p>
                <span className="font-bold tracking-wider">Type: </span>
                {anime.data.type}
              </p>
              <p>
                <span className="font-bold tracking-wider">Episodes: </span>
                {anime.data.episodes}
              </p>
              <p>
                <span className="font-bold tracking-wider">Rating: </span>
                {anime.data.rating}
              </p>
            </div>
            <div className="flex flex-wrap space-x-2">
              {anime.data.genres.map((genre) => (
                <div
                  key={genre.mal_id}
                  className="bg-[#222831] p-2 rounded-lg my-2"
                >
                  {genre.name}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 xl:flex-row m-4">
          <div className="flex justify-between p-2 items-center bg-[#222831] w-full rounded-lg">
            <div className="flex flex-col">
              <span className="text-sm text-gray-300">Rank</span>
              <span className="text-lg">
                {anime.data.rank ? anime.data.rank : <p>Unavailable</p>}
              </span>
            </div>
            <GiPodium size={40} />
          </div>
          <div className="flex justify-between p-2 items-center bg-[#222831] w-full rounded-lg">
            <div className="flex flex-col">
              <span className="text-sm text-gray-300">Popularity</span>
              <span className="text-lg">
                {anime.data.popularity ? (
                  anime.data.popularity
                ) : (
                  <p>Unavailable</p>
                )}
              </span>
            </div>
            <MdLocalFireDepartment size={40} className="text-orange-600" />
          </div>
          <div className="flex justify-between p-2 items-center bg-[#222831] w-full rounded-lg">
            <div className="flex flex-col">
              <span className="text-sm text-gray-300">Score</span>
              <span className="text-lg">
                {anime.data.score ? anime.data.score : <p>Unavailable</p>}
              </span>
            </div>
            <FaStar size={40} className="text-yellow-400" />
          </div>
          <div className="flex justify-between p-2 items-center bg-[#222831] w-full rounded-lg">
            <div className="flex flex-col">
              <span className="text-sm text-gray-300">Release Year</span>
              <span className="text-lg">
                {anime.data.year ? anime.data.year : <p>Unavailable</p>}
              </span>
            </div>
            <MdDateRange size={40} />
          </div>
          <div className="flex justify-between p-2 items-center bg-[#222831] w-full rounded-lg">
            <div className="flex flex-col">
              <span className="text-sm text-gray-300">Season</span>
              <span className="text-lg">
                {anime.data.season ? (
                  anime.data.season.charAt(0).toUpperCase() +
                  anime.data.season.slice(1)
                ) : (
                  <p>Unavailable</p>
                )}
              </span>
            </div>
            <BsCloudSun size={40} />
          </div>
          <div className="flex justify-between p-2 items-center bg-[#222831] w-full rounded-lg">
            <div className="flex flex-col">
              <span className="text-sm text-gray-300">Status</span>
              <span className="text-lg">
                {anime.data.status ? anime.data.status : <p>Unavailable</p>}
              </span>
            </div>
            <BiMoviePlay size={40} />
          </div>
        </div>
        <div className="m-4 rounded-lg pb-4">
          <YoutubeEmbed
            embedId={anime.data.trailer.youtube_id}
            className="absolute top-0 left-0 w-full h-full"
          />
        </div>
      </section>
      {/* <div className='grid-container'>
        <div className="anime cover"><img src={anime.data.images.webp.large_image_url} alt="" className="animeCover" /></div>
        <div className="detail">
          <div className="header">
            <div className="header-title">
              <div>
                <h2>{anime.data.title_english ? anime.data.title_english : anime.data.title}</h2>
                <h3>{anime.data.title_japanese}</h3>
              </div>
              {loggedIn && favouriteBtnDisabled != null && <div className="favourite">
                <button className='favourite-btn' onClick={() => handleFavAnime(anime.data)} disabled={favouriteBtnDisabled} ><FaHeart className={favouriteBtnDisabled ? 'favourite-icon disabled' : 'favourite-icon'} size={28}/></button>
              </div>}
            </div>
            <p><strong>Synopsis: </strong>{anime.data.synopsis?.replace('[Written by MAL Rewrite]', '')}</p>
            <div className="anime-type"><p><strong>Type: </strong>{anime.data.type}</p></div>
            <p><strong>Episodes: </strong>{anime.data.episodes}</p>
            <p><strong>Rating: </strong>{anime.data.rating}</p>
            <div className="genres">
              <ul>
                {anime.data.genres.map(genre => (
                  <li key={genre.mal_id}>{genre.name}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="stats">
          <ul className="statistics">
            <li><div className="statistics-li">
                <div className="text">
                  <p>Rank</p>
                  <p>{anime.data.rank ? anime.data.rank : <p>Unavailable</p>}</p>
                </div>
                <div className="icon rank">
                  <GiPodium size={40}/>
                </div>
              </div></li>
              <li><div className="statistics-li">
                <div className="text">
                  <p>Popularity</p>
                  <p>{anime.data.popularity ? anime.data.popularity : <p>Unavailable</p>}</p>
                </div>
                <div className="icon fire">
                  <MdLocalFireDepartment size={40}/>
                </div>
              </div></li>
              <li><div className="statistics-li">
                <div className="text">
                  <p>Score</p>
                  <p>{anime.data.score ? anime.data.score : <p>Unavailable</p>}</p>
                </div>
                <div className="icon star">
                  <FaStar size={40}/>
                </div>
              </div></li>
              <li><div className="statistics-li">
                <div className="text">
                  <p>Release Year</p>
                  <p>{anime.data.year ? anime.data.year : <p>Unavailable</p>}</p>
                </div>
                <div className="icon calendar">
                  <MdDateRange size={40}/>
                </div>
              </div></li>
              <li><div className="statistics-li">
                <div className="text">
                  <p>Season</p>
                  <p>{anime.data.season ? anime.data.season.charAt(0).toUpperCase() + anime.data.season.slice(1) : <p>Unavailable</p>}</p>
                </div>
                <div className="icon cloud">
                  <BsCloudSun size={40}/>
                </div>
              </div></li>
              <li><div className="statistics-li">
                <div className="text">
                  <p>Status</p>
                  <p>{anime.data.status ? anime.data.status : <p>Unavailable</p>}</p>
                </div>
                <div className="icon tick">
                  <BiMoviePlay size={40}/>
                </div>
              </div></li>
          </ul>
        </div>
        <div className="trailer">
          <div className="trailer-box">
            <YoutubeEmbed embedId={anime.data.trailer.youtube_id}/>
          </div>
        </div>
      </div> */}
    </main>
  );
}

export default AnimeDetail