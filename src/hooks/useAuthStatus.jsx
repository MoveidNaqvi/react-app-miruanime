import {onAuthStateChanged} from 'firebase/auth'
import {useState, useEffect} from 'react'
import { auth } from '../firebase/config'

function useAuthStatus() {

  const [loggedIn, setIsLoggedIn] = useState(false)
  const [checkingStatus, setCheckingStatus] = useState(true)

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if(user){
        setIsLoggedIn(true)
      }
      else{
        setIsLoggedIn(false)
      }
      setCheckingStatus(false)
    })
    return unsub
  },[])

  return {loggedIn, checkingStatus}
}

export default useAuthStatus