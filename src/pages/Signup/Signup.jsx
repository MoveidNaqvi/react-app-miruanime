import {createUserWithEmailAndPassword, updateProfile} from 'firebase/auth'
import {auth, db} from '../../firebase/config'
import { Link, useNavigate } from 'react-router-dom'
import {useState} from 'react'
import { toast } from 'react-toastify'
import { doc, setDoc } from 'firebase/firestore'

function Signup() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const navigate = useNavigate()

  const handleRegister = async (e) => {
    setError(null)
    e.preventDefault()
    if(!email || !password || !name) {
      return setError('All fields are required!')
    }
    if(password.length < 6 ){
      return setError('Password must at least be 6 characters')
    }
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
      if(error.message = 'FirebaseError: Firebase: Error (auth/email-already-in-use).'){
        toast.error('Email already in use!', {
          autoClose: 1500,
          pauseOnHover: false,
        })
        setIsLoading(false)
      }
      else{
        setIsLoading(false)
      }
    }
  }

  return (
    <>
      <div className="flex justify-center items-center h-full min-h-[88.5vh]">
        <div className="bg-[#393E46] p-8 rounded-lg shadow-lg m-4">
          <h1 className="text-white font-bold tracking-wide text-3xl text-center mb-4">
            Register
          </h1>
          <form
            className="flex flex-col justify-center items-center space-y-4 text-white"
            onSubmit={handleRegister}
          >
            <input
              type="text"
              className="bg-[#222831] w-full p-2 rounded-lg text-2xl placeholder:text-white"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
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
              {!loading ? "Register" : "loading..."}
            </button>
          </form>
          <p className="text-white text-xl mt-2 text-center">
            Already have an account?
            <br />
            <Link to="/sign-in" className="text-cyan-400 cursor-pointer">
              Sign in here!
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Signup
