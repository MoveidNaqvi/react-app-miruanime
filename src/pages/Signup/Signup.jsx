import { Link } from 'react-router-dom'
import {useState} from 'react'
import './Signup.css'

function Signup() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleRegister = (e) => {
    e.preventDefault()
    console.log(name, email, password)
    setName('')
    setEmail('')
    setPassword('')
  }

  return (
    <>
      <div className="sign-up">
        <form className="sign-up-form" onSubmit={handleRegister}>
          <label>
            <span>Name</span>
            <input type="text" onChange={(e) => setName(e.target.value)} value={name}/>
          </label>
          <label>
            <span>Email</span>
            <input type="email" onChange={(e) => setEmail(e.target.value)} value={email}/>
          </label>
          <label>
            <span>Password</span>
            <input type="password" onChange={(e) => setPassword(e.target.value)} value={password}/>
          </label>
          <button className="sign-up-btn">Register</button>
          <p className="alternative">Already have an account? <Link to='/sign-in' className='login-link'>Login here!</Link></p>
        </form>
      </div>
    </>
  )
}

export default Signup