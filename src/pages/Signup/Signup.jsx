import {createUserWithEmailAndPassword, updateProfile} from 'firebase/auth'
import {auth} from '../../firebase/config'
import { Link, useNavigate } from 'react-router-dom'
import {useState} from 'react'
import { toast } from 'react-toastify'
import './Signup.css'

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
          <p className="alternative">Already have an account? <Link to='/sign-in' className='login-link'>Login here!</Link></p>
        </form>
      </div>
    </>
  )
}

export default Signup