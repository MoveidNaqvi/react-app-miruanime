import { Link } from 'react-router-dom'
import Searchbar from '../searchbar/Searchbar'
import weblogo from '../../assets/images/webLogo.webp'
import './Navbar.css'
import { auth } from '../../firebase/config'
import useAuthStatus from '../../hooks/useAuthStatus'

function Navbar() {

  const handleLogout = () => {
    auth.signOut()
  }

  const {loggedIn} = useAuthStatus()

  return (
    <>
      <header className="bg-[#393e46] text-white">
        <nav className="flex flex-col gap-3 items-center shadow-lg sm:flex-row sm:justify-between p-3">
          <Link to="/">
            <img src={weblogo} alt="" className="w-20 cursor-pointer" />
          </Link>
          <Searchbar />
          <div className="flex justify-center items-center gap-4 text-xl">
            <Link
              to="/"
              className="hover:text-cyan-400 transition-colors duration-200 cursor-pointer"
            >
              Home
            </Link>
            <Link
              to="/favourite"
              className="hover:text-cyan-400 transition-colors duration-200 cursor-pointer"
            >
              Favourites
            </Link>
          </div>
        </nav>
      </header>
    </>

    // <div className="navbar-container">
    //   <nav>
    //     <div className="logo">
    //       <Link to='/'><img src={weblogo} alt="Website Logo" /></Link>
    //     </div>
    //     <div className='search'>
    //       <Searchbar/>
    //     </div>
    //     <div className="nav-links">
    //       <Link to='/'>Home</Link>
    //       <Link to='/favourite'>Favourites</Link>
    //       {loggedIn && <button className="logout-btn" onClick={handleLogout}>Logout</button>}
    //     </div>
    //   </nav>
    // </div>
  );
}

export default Navbar