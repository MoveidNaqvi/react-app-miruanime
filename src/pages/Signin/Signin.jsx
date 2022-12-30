import {signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom'
import {useState} from 'react'
import { auth, db } from '../../firebase/config'
import {toast} from 'react-toastify'
import {ImGoogle3} from 'react-icons/im'
import { doc, getDoc, setDoc } from 'firebase/firestore'

function Signin() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    if(!email || !password) {
      return console.log('All fields required!')
    }
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
      const docSnap = await getDoc(userDocRef);
      if(docSnap.exists()){
        setIsLoading(false)
        navigate('/favourite')
      }
      else{
        await setDoc(userDocRef, {
          favourites: [],
          animeID: []
        })
        setIsLoading(false)
        navigate('/favourite')
      }
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
      <div className="flex justify-center items-center h-full min-h-[88.5vh]">
        <div className="bg-[#393E46] p-8 rounded-lg shadow-lg w-[400px] max-w-full m-4">
          <h1 className="text-white font-bold tracking-wide text-3xl text-center mb-4">
            Login
          </h1>
          <form
            className="flex flex-col justify-center items-center space-y-4 text-white"
            onSubmit={handleLogin}
          >
            <input
              type="email"
              className="bg-[#222831] w-full p-2 rounded-lg text-2xl placeholder:text-white"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              className="bg-[#222831] w-full p-2 rounded-lg text-2xl placeholder:text-white"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="bg-[#222831] p-3 rounded-lg transition-all w-1/2 hover:bg-cyan-400 duration-200 text-2xl">
              {!loading ? "Login" : "loading..."}
            </button>
            <ImGoogle3
              size={40}
              onClick={handleGoogleLogin}
              className="hover:text-cyan-400 transition-all duration-200 cursor-pointer"
            />
          </form>
          <p className="text-white text-xl mt-2 text-center max-w-xs">
            Don't have an account?{" "}
            <Link to='/sign-up' className="text-cyan-400 cursor-pointer">Register here!</Link>
          </p>
        </div>
      </div>
      {/* <div className="sign-in">
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
      </div> */}
    </>
  );
}

export default Signin