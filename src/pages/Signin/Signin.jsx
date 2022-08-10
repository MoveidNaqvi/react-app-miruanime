import {signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom'
import {useState} from 'react'
import { auth, db } from '../../firebase/config'
import {toast} from 'react-toastify'
import {ImGoogle3} from 'react-icons/im'
import './Signin.css'
import { doc, setDoc } from 'firebase/firestore'

function Signin() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      setIsLoading(true)
      await signInWithEmailAndPassword(auth, email, password)
      setIsLoading(false)
      navigate('/favourite')
    } catch (error) {
      toast.error('Bad user credentials!', {
        autoClose: 1500,
        pauseOnHover: false,
      })
      setIsLoading(false)
    }
  }

  const handleGoogleLogin = async () => {
    try {
      setIsLoading(true)
      const provider = new GoogleAuthProvider()
      await signInWithPopup(auth, provider)
      const userDocRef = doc(db, 'users', auth.currentUser.uid)
      await setDoc(userDocRef, {
        favourites: [],
        animeID: []
      })
      setIsLoading(false)
      navigate('/favourite')
    } catch (error) {
      toast.error('Could not authorise with Google', {
        autoClose: 1500,
        pauseOnHover: false,
      })
      setIsLoading(false)
    }
  }

  return (
    <>
      <div className="sign-in">
        <form className="sign-in-form" onSubmit={handleLogin}>
          <label>
            <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} value={email} required/>
          </label>
          <label>
            <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} value={password} required/>
          </label>
          <button className="sign-in-btn" disabled={loading}>{!loading ? 'Login' : 'loading...'}</button>
          <div className="other-login"><ImGoogle3 size={40} onClick={handleGoogleLogin} className='google-icon'/></div>
          <p className="alternative">Don't have an account? <Link to='/sign-up' className='register-link'>Register here!</Link></p>
        </form>
      </div>
    </>
  )
}

export default Signin