import React from 'react'
import {
  Link
} from "react-router-dom";

const Projects = () => {
  return (
    <>
    <div className='ProjectPage' id='projects'>
      <div class="container px-4 py-5" id="custom-cards">
      <h1 className="display-5 fw-bold text-body-emphasis" style={{textAlign:'center'}} data-aos="zoom-in" >Projects</h1>

    <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
      <div class="col" data-aos="fade-up">
        <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" id='GermsLogo' >
          <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            <h3 id="projectTitle" class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold" style={{textAlign:'center',color:"white"}} data-aos="zoom-in" >"GEMS"</h3>
            <h6  id="projectDES" style={{textAlign:'justify'}} data-aos="zoom-in"  >Discover GEMS: Your one-stop destination for the latest news, games, and movies, all in one place with real-time updates, offering endless entertainment possibilities.</h6>
            <a href="https://srikanthk123.github.io/Gems/" class="btn btn-primary" data-aos="zoom-in" >
            View
          </a>
          </div>
        </div>
      </div>

      <div class="col" data-aos="fade-up">
        <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" id='Clgwebsite' >
          <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            <h3 id="projectTitle" class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold" data-aos="zoom-in" >"A Website that serves students to stay on-date with college"</h3>
            <h6 id="projectDES"  data-aos="zoom-in" >Created an application to Authenticate and Validate Products and Certificates using Blockchain, to tackle against ....</h6>
            <a href="#" class="btn btn-primary" data-aos="zoom-in" >
            View
          </a>
           
          </div>
        </div>
      </div>

      <div class="col" data-aos="fade-up">
        <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" id='BlockChain' >
          <div class="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
            <h3  id="projectTitle"class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold" data-aos="zoom-in" >"Authentication and Validation of products and certificate using Blockchain"</h3>
            <h6 id="projectDES"  data-aos="zoom-in" >Made a website that helps students to stay-on date with college. ..... </h6>
           
            <a href="#" class="btn btn-primary" data-aos="zoom-in" >
            View
          </a>
         
          </div>
        </div>
      </div>
      <div class="col" data-aos="fade-up">
        <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" id='Cinema' >
          <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            <h3 id="projectTitle" class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold" style={{textAlign:'center',color:"white"}} data-aos="zoom-in" >"CINEMA"</h3>
            <h6  id="projectDES" style={{textAlign:'justify'}} data-aos="zoom-in"  >"Explore a vast collection of movies with our ReactJS-powered website. Discover the latest blockbusters, timeless classics, and hidden gems in an immersive and user-friendly interface. Enjoy a seamless movie-watching experience with our responsive and dynamic platform."</h6>
            <a href="https://srikanthk123.github.io/FilmZone/" class="btn btn-primary" data-aos="zoom-in" >
            View
          </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
    </>
  )
}

export default Projects
