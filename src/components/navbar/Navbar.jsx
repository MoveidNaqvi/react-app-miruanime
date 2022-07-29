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
    <div className="navbar-container">
      <nav>
        <div className="logo">
          <Link to='/'><img src={weblogo} alt="Website Logo" /></Link>
        </div>
        <div className='search'>
          <Searchbar/>
        </div>
        <div className="nav-links">
          <Link to='/'>Home</Link>
          <Link to='/favourite'>Favourites</Link>
          {loggedIn && <button className="logout-btn" onClick={handleLogout}>Logout</button>}
        </div> 
      </nav>
    </div>
  )
}

export default Navbar