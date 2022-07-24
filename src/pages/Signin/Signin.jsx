import { Link } from 'react-router-dom'
import {useState} from 'react'
import './Signin.css'

function Signin() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    console.log(email, password)
    setEmail('')
    setPassword('')
  }

  return (
    <>
      <div className="sign-in">
        <form className="sign-in-form" onSubmit={handleLogin}>
          <label>
            <span>Email</span>
            <input type="email" onChange={(e) => setEmail(e.target.value)} value={email}/>
          </label>
          <label>
            <span>Password</span>
            <input type="password" onChange={(e) => setPassword(e.target.value)} value={password}/>
          </label>
          <button className="sign-in-btn">Login</button>
          <p className="alternative">Don't have an account? <Link to='/sign-up' className='register-link'>Register here!</Link></p>
        </form>
      </div>
    </>
  )
}

export default Signin