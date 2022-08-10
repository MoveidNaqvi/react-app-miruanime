import {createUserWithEmailAndPassword, updateProfile, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'
import {auth, db} from '../../firebase/config'
import { Link, useNavigate } from 'react-router-dom'
import {useState} from 'react'
import { toast } from 'react-toastify'
import {ImGoogle3} from 'react-icons/im'
import './Signup.css'
import { doc, setDoc } from 'firebase/firestore'

function Signup() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  const handleRegister = async (e) => {
    e.preventDefault()
    try {
      setIsLoading(true)
      await createUserWithEmailAndPassword(auth, email, password)
      await updateProfile(auth.currentUser, {
        displayName: name
      })
      const userDocRef = doc(db, 'users', auth.currentUser.uid)
      await setDoc(userDocRef, {
        favourites: [],
        animeID: []
      })
      setIsLoading(false)
      setName('')
      setEmail('')
      setPassword('')
      toast.success('Registration successful', {
        autoClose: 1500,
        pauseOnHover: false,
      })
      navigate('/favourite')
    } catch (error) {
      toast.error(error.message, {
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
      <div className="sign-up">
        <form className="sign-up-form" onSubmit={handleRegister}>
          <label>
            <input type="text" placeholder='Name' onChange={(e) => setName(e.target.value)} value={name} required/>
          </label>
          <label>
            <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} value={email} required/>
          </label>
          <label>
            <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} value={password} required/>
          </label>
          <button className="sign-up-btn" disabled={loading}>{!loading ? 'Register' : 'loading...'}</button>
          <div className="other-login"><ImGoogle3 size={40} onClick={handleGoogleLogin} className='google-icon'/></div>
          <p className="alternative">Already have an account? <Link to='/sign-in' className='login-link'>Login here!</Link></p>
        </form>
      </div>
    </>
  )
}

export default Signup