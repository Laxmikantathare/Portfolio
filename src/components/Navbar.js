import React from 'react'
import { Link } from 'react-router-dom'
import '../components/Style.css'

export default function Navbar(props) {
  return (
    <nav className="navbar sticky-top justify-content-between" >
    <div className="container-fluid">
    
      <Link className="navbar-brand headw text-dark" to="/"><h2 className='gamenav mt-2'>Laxmikant Athare</h2></Link>
  
      <div className=" justify-content-end lists" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto flex-row  mb-2">
          <li className="nav-item">
            <Link className="nav-link navbtn home1" aria-current="page" to="/">ABOUT</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link navbtn mx-3" aria-current="page" to="/post1">RESUME</Link>
          </li>
     
          <li className="nav-item">
            <Link className="nav-link navbtn me-3" aria-current="page" to="/post2">PROJECTS</Link>
          </li>
     
          <li className="nav-item">
            <Link className="nav-link  me-3 navbtn" aria-current="page" to="/contact">CONTACT</Link>
          </li>

         
        </ul>
      </div>
    </div>
  </nav>
  )
}
