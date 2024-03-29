import React from 'react'
import Homologo from '../Images/HomeLogo.png'

const Home = () => {
  return (
    <>
    <div className='HomePage' id='home' >
      <div class="container col-xxl-8 px-4 py-5" data-aos="fade-up">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5" id='HomePageImage'>
      <div class="col-10 col-sm-8 col-lg-6">
        <img src={Homologo} data-aos="zoom-in" class="d-block mx-lg-auto img-fluid" style={{borderRadius:'15px',boxShadow:'rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset'}} alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
      </div>
      <div class="col-lg-6" >
        <h1 class="display-5 fw-bold  lh-1 mb-3 text-white" data-aos="zoom-in" >Hey there! I'm Srikanth. I have a passion, for web development. 🚀</h1>
        <p class="lead text-white" data-aos="zoom-in" >I'm a web developer who absolutely loves designing functional websites. My journey into the world of web development began with a curiosity and a strong desire to bring my ideas to life on the internet.</p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
        </div>
      </div>
    </div>
  </div>
  </div>
  
    </>
  )
}

export default Home
