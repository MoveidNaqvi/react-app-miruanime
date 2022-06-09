import React from 'react'
import reactLogo from '../assets/images/reactLogo.png'
import { BsSuitHeartFill } from 'react-icons/bs'
import './About.css'

function About() {
  return (
    <main>
      <div className='container'>
        <div className="info-box">
          <div className="content">
            <h3>About this Project</h3>
            <p>This website was made with the aim of learning React. This project makes use of the Jikan API.</p>
            <button className="api-btn"><a href="https://jikan.moe/" target='_blank' rel="noreferrer">Check out the API!</a></button>
            <p className='coder'>Coded with<span><BsSuitHeartFill size={20}/></span>by Moveid </p>
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