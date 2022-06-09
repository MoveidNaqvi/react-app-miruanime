import { Link } from 'react-router-dom';
import { FiChevronUp } from 'react-icons/fi'
import './Dropdown.css'

function Dropdown() {
  return (
    <div className="dropdown">
      <button className="dropbtn">Select Category <div className="chevron"><FiChevronUp size={25}/></div></button>
      <div className="dropdown-content">
        <ul>
          <li><Link to='/top'>Top</Link></li>
          <li><Link to='/upcoming'>Upcoming</Link></li>
          <li><Link to='/'>Airing</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Dropdown