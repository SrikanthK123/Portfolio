import React from 'react'
import { Link } from 'react-scroll'

const NavBar = () => {
  return (
    <>
      <nav  className="navbar navbar-expand-md sticky-top border-bottom" data-bs-theme="light" style={{backgroundColor:'#081029E6'}}>
  <div  className="container">
    
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    
      <div  className="offcanvas-body">
        <ul  className="navbar-nav flex-grow-1 justify-content-between">
        <Link className="navbar-brand" id='NavTitle' to="home" >Portfolio</Link>
          <li  className="nav-item"><Link className="nav-link" to="home" spy={true} smooth={true} offset={-100} duration={500}>Home</Link></li>
          <li  className="nav-item"><Link className="nav-link" to="about" spy={true} smooth={true} offset={-100} duration={500}>About-Me</Link></li>
          <li  className="nav-item"><Link className="nav-link" to="education" spy={true} smooth={true} offset={-100} duration={500}>Education</Link></li>
          <li  className="nav-item"><Link className="nav-link" to="projects" spy={true} smooth={true} offset={-100} duration={500}>Projects</Link></li>
          <li  className="nav-item"><Link className="nav-link" to="certificate" spy={true} smooth={true} offset={-100} duration={500}>Certificate</Link></li>
          <li  className="nav-item"><Link className="nav-link" to="skills" spy={true} smooth={true} offset={-100} duration={500}>Skills</Link></li>
          
          
        </ul>
      </div>
    </div>
</nav>
    </>
  )
}

export default NavBar

