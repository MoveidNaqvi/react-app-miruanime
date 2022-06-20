import React from 'react'
import reactLogo from '../assets/images/reactLogo.png'
import { BsSuitHeartFill, BsGithub, BsInstagram} from 'react-icons/bs'
import './About.css'

function About() {
  return (
    <main>
      <div className='container'>
        <div className="info-box">
          <div className="content">
            <h3>About this Project</h3>
            <p>A project website that is created with React and powered by Jikan.</p>
            <button className="api-btn"><a href="https://jikan.moe/" target='_blank' rel="noreferrer">Check out the API!</a></button>
            <p className='coder'>Coded with<span><BsSuitHeartFill size={20}/></span>by Moveid </p>
            <div className="social-links">
              <ul>
                <li><a href="https://github.com/MoveidNaqvi" target='_blank' rel='noreferrer'><BsGithub size={35}/></a></li>
                <li><a href="https://www.instagram.com/syedmoveid/" target='_blank' rel='noreferrer'><BsInstagram size={35}/></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="img-box">
          <img src={reactLogo} alt="" className='img' />
        </div>
      </div>
    </main>
  )
}

export default About