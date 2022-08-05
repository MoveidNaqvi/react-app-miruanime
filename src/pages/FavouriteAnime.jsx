import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import AnimeList from "../components/animelist/AnimeList"
import './FavouriteAnime.css'
import { doc, onSnapshot} from 'firebase/firestore'
import { auth } from '../firebase/config'
import { db } from '../firebase/config'
import { BsQuestionCircleFill } from 'react-icons/bs'

function FavouriteAnime() {

  const [documents, setDocuments] = useState(null)
  const [loading, isLoading] = useState(true)

  useEffect(() => {
    let ref = doc(db, 'users', auth.currentUser.uid)
    // const q = query(ref, where('uid', '==', auth.currentUser.uid))
    const unsub = onSnapshot(ref, (snapshot) => {
      if(snapshot.data()){
        setDocuments({...snapshot.data(), id: snapshot.id})
        isLoading(false)
      }else{
        console.log('No document with that id')
        isLoading(false)
      }
    }, (err) => {
      console.log('Failed to get document')
      isLoading(false)
    })
    return unsub
  },[])
  const [favouriteAnimeArray] = [{data:  !loading && documents.favourites}]

  return (
    <>
      <div className='fav-anime'>
        <h1>Welcome {auth.currentUser.displayName}</h1>
        {favouriteAnimeArray.data.length > 0 ? <h1>Your favourite anime!</h1> : ''}
        {favouriteAnimeArray.data.length > 0 ? <AnimeList animelist={favouriteAnimeArray} type='favourite'/> : <h1>No favourite anime!</h1>}
        <span className='about-me-link'><Link to='/about'><BsQuestionCircleFill className='question' size={40}/></Link></span>
      </div>
    </>
  )
}

export default FavouriteAnime