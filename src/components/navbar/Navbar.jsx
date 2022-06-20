import { Link } from 'react-router-dom'
import Searchbar from '../searchbar/Searchbar'
import weblogo from '../../assets/images/webLogo.webp'
import './Navbar.css'

function Navbar() {
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
          <Link to='/about'>About</Link>
        </div> 
      </nav>
    </div>
  )
}

export default Navbar