import { Link } from 'react-router-dom'
import Searchbar from '../searchbar/Searchbar'
import weblogo from '../../assets/images/webLogo.webp'
import './Navbar.css'

function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <div className="logo">
          <Link to='/'><img src={weblogo} alt="" /></Link>
        </div>
        <div className='search'>
          <Searchbar/>
        </div>
        <div className="nav-links">
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
        </div> 
      </nav>
    </div>
  )
}

export default Navbar