import {signInWithEmailAndPassword} from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom'
import {useState} from 'react'
import { auth } from '../../firebase/config'
import {toast} from 'react-toastify'
import './Signin.css'

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
          <p className="alternative">Don't have an account? <Link to='/sign-up' className='register-link'>Register here!</Link></p>
        </form>
      </div>
    </>
  )
}

export default Signin