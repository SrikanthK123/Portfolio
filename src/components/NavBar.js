import React from 'react'
import { Link } from 'react-scroll'

const NavBar = () => {
  return (
    <>
    
<div>
<header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between navbar navbar-expand-md sticky-top border-bottom" style={{ backgroundColor: '#051622', zIndex: '1000', position: 'fixed', width: '100%' }}>
  <div class="col-md-3 mb-2 mb-md-0 my-3 mx-3">
    <Link to="/EarthDiscover" class="d-inline-flex link-body-emphasis text-decoration-none" id="Logo">
      <h3 style={{ color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', fontFamily: 'monospace' }}> Portfolio</h3>
    </Link>
  </div>

  <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 mx-5">
    <li className="nav-item"><Link className="nav-link" to="home" spy={true} smooth={true} offset={-100} duration={500}>Home</Link></li>
    <li className="nav-item"><Link className="nav-link" to="about" spy={true} smooth={true} offset={-100} duration={500}>About-Me</Link></li>
    <li className="nav-item"><Link className="nav-link" to="education" spy={true} smooth={true} offset={-100} duration={500}>Education</Link></li>
    <li className="nav-item"><Link className="nav-link" to="projects" spy={true} smooth={true} offset={-100} duration={500}>Projects</Link></li>
    <li className="nav-item"><Link className="nav-link" to="certificate" spy={true} smooth={true} offset={-100} duration={500}>Certificate</Link></li>
    <li className="nav-item"><Link className="nav-link" to="skills" spy={true} smooth={true} offset={-100} duration={500}>Skills</Link></li>
  </ul>
</header>


</div>
    </>
  )
}

export default NavBar

