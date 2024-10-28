import React from 'react'
import { Link } from 'react-router-dom'
import '../components/Style.css'

export default function Navbar(props) {
  return (
    <nav className="navbar sticky-top justify-content-between" >
    <div className="container-fluid">
    
      <Link className="navbar-brand headw text-dark" to="/"><p className='gamenav'>Laxmikant Athare</p></Link>
  
      <div className=" justify-content-end lists" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto flex-row  mb-2">
          <li className="nav-item">
            <Link className="nav-link navbtn home1" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link navbtn mx-3" aria-current="page" to="/post1">post1</Link>
          </li>
     
          <li className="nav-item">
            <Link className="nav-link navbtn mx-3" aria-current="page" to="/post2">post2</Link>
          </li>
     
          <li className="nav-item">
            <Link className="nav-link navbtn mx-3" aria-current="page" to="/post3">post3</Link>
          </li>
     
          <li className="nav-item">
            <Link className="nav-link navbtn mx-3" aria-current="page" to="/post4">post4</Link>
          </li>
     
          <li className="nav-item">
            <Link className="nav-link navbtn mx-3" aria-current="page" to="/post5">post5</Link>
          </li>
     
          <li className="nav-item">
            <Link className="nav-link  me-3 navbtn" aria-current="page" to="/contact">Contact</Link>
          </li>

         
        </ul>
      </div>
    </div>
  </nav>
  )
}
