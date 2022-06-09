import './Error.css'
import {Link} from 'react-router-dom'
import Error404 from '../assets/images/Error404.gif'

function Error() {
  return (
    <main>
      <div className='container'>
          <div className="info-box">
            <div className="content">
              <h3>Oops</h3>
              <p className='error-info'>The information you were looking for was not found. Do not worry though you can go back :)</p>
              <Link to='/' className='api-btn'>Go to home</Link>
            </div>
          </div>
          <div className="img-box">
            <img src={Error404} alt="" className='img' />
          </div>
        </div>
      </main>
  )
}

export default Error