import React from 'react'
import {
  Link
} from "react-router-dom";

const Projects = () => {
  return (
    <>
    <div className='ProjectPage' id='projects'>
      <div class="container px-4 py-5" id="custom-cards">
      <h1 className="display-5 fw-bold text-body-emphasis" style={{textAlign:'center'}} >Projects</h1>

    <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
      <div class="col">
        <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" id='GermsLogo' >
          <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            <h3 id="projectTitle" class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold" style={{textAlign:'center',color:"white"}}>"GEMS"</h3>
            <h6  id="projectDES" style={{textAlign:'justify'}} >Discover GEMS: Your one-stop destination for the latest news, games, and movies, all in one place with real-time updates, offering endless entertainment possibilities.</h6>
            <a href="https://srikanthk123.github.io/Gems/" class="btn btn-primary">
            View
          </a>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" id='Clgwebsite' >
          <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            <h3 id="projectTitle" class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">"A Website that serves students to stay on-date with college"</h3>
            <h6 id="projectDES" >Created an application to Authenticate and Validate Products and Certificates using Blockchain, to tackle against ....</h6>
            <a href="#" class="btn btn-primary">
            View
          </a>
           
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" id='BlockChain' >
          <div class="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
            <h3  id="projectTitle"class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">"Authentication and Validation of products and certificate using Blockchain"</h3>
            <h6 id="projectDES" >Made a website that helps students to stay-on date with college. ..... </h6>
           
            <a href="#" class="btn btn-primary">
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
