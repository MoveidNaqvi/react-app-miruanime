import React from 'react'
import reactLogo from '../assets/images/reactLogo.png'
import { BsSuitHeartFill, BsGithub} from 'react-icons/bs'

function About() {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen text-white">
        <div className="flex flex-col m-4 max-w-md md:flex-row md:max-w-2xl bg-[#393E46] rounded-lg">
          <div className="space-y-3 p-4 md:w-1/2">
            <h1 className="font-bold tracking-wide text-2xl">
              About this project
            </h1>
            <p className="max-w-xs text-xl">
              A website created with React and powered by Jikan
            </p>
            <a
              href="https://jikan.moe/"
              target="_blank"
              rel="noreferrer"
              className="block"
            >
              <button className="bg-[#222831] p-3 rounded-lg text-lg hover:bg-cyan-400 transition-all duration-200">
                Checkout the API
              </button>
            </a>
            <p className="flex items-center text-xl">
              Coded with <BsSuitHeartFill className="text-red-700 mx-1" /> by
              Moveid
            </p>
            <div className="flex items-center">
              <a
                href="https://github.com/MoveidNaqvi"
                target="_blank"
                rel="noreferrer"
              >
                <BsGithub
                  size={35}
                  className="hover:text-cyan-400 transition-all duration-200"
                />
              </a>
            </div>
          </div>
          <img
            src={reactLogo}
            alt=""
            className="rounded-b-lg md:rounded-none md:rounded-r-lg md:w-1/2 object-cover object-center"
          />
        </div>
      </div>
    </>
    // <main>
    //   <div className='container'>
    //     <div className="info-box">
    //       <div className="content">
    //         <h3>About this Project</h3>
    //         <p>A project website that is created with React and powered by Jikan.</p>
    //         <button className="api-btn"><a href="https://jikan.moe/" target='_blank' rel="noreferrer">Check out the API!</a></button>
    //         <p className='coder'>Coded with<span><BsSuitHeartFill size={20}/></span>by Moveid </p>
    //         <div className="social-links">
    //           <ul>
    //             <li><a href="https://github.com/MoveidNaqvi" target='_blank' rel='noreferrer'><BsGithub size={35}/></a></li>
    //           </ul>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="img-box">
    //       <img src={reactLogo} alt="" className='img' />
    //     </div>
    //   </div>
    // </main>
  );
}

export default About