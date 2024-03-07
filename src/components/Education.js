import React from "react";
import "@fortawesome/fontawesome-free/css/all.css";
const Education = () => {
  return (
    <>
      <div className="Education" id="education">
      <div style={{display:'flex',justifyContent:'center'}}>
      <h2 className="fw-bold text-body-emphasis p-2 my-4" style={{textAlign:'center',fontFamily:'-moz-initial',backgroundColor:'skyblue',borderRadius:'15px' ,boxShadow:'rgba(0, 0, 0, 0.24) 0px 3px 8px'}} >Education</h2>
        </div>
        <div class="container my-5 "   >
          <div class="p-3 text-center rounded-3" data-aos="fade-up" style={{backgroundColor:'#051622'}}>
            
            <h1 class="text-body-emphasis">
              <i class="fa fa-graduation-cap text-white " aria-hidden="true" data-aos="zoom-in"></i>
            </h1>
            <h3 data-aos="zoom-in" className="text-white" style={{fontWeight:'600',textTransform:'uppercase',fontSize:'17px',padding:'10px'}} >Bachelor of Technology</h3>
            <p class="lead text-white" data-aos="zoom-in"  style={{fontWeight:'600',textTransform:'uppercase',fontSize:'14px',padding:'10px'}} >
              I've completed my bachelor's degree in Computer Science and
              Engineering at Aurora’s Technological & Research Institute,
              Hyderabad<code style={{color:'rgb(52 171 236)',fontWeight:'bold'}}>(2022)</code>
            </p>
          </div>
        </div>

        <div class="container my-5" id="edubox" >
          <div class="p-3 text-center  rounded-3" data-aos="fade-up" style={{backgroundColor:'#051622'}}>
            <h1 class="text-body-emphasis">
              <i class="fa fa-university text-white" aria-hidden="true" data-aos="zoom-in"></i>
            </h1>
            <h3 data-aos="zoom-in" className="text-white" style={{fontWeight:'600',textTransform:'uppercase',fontSize:'17px',padding:'10px'}}>Completion of Board of Intermediate Public Examination</h3>
            <p class="lead text-white"  data-aos="zoom-in" style={{fontWeight:'600',textTransform:'uppercase',fontSize:'14px',padding:'10px'}} >
              I've completed my Higher Secondary School Certificate (HSSC) in
              Maths, Physics and Chemistry (MPC) at Sri Chaitanya Junior
              Kalasala <code style={{color:'rgb(52 171 236)',fontWeight:'bold'}}>(2018)</code>
            </p>
          </div>
        </div>

        <div class="container" id="edubox" >
          <div class="p-3 text-center  rounded-3" data-aos="fade-up" style={{backgroundColor:'#051622'}}>
            <h1 class="text-body-emphasis">
              <i className="fas fa-school text-white" data-aos="zoom-in"></i>
            </h1>
            <h3 data-aos="zoom-in" className="text-white" style={{fontWeight:'600',textTransform:'uppercase',fontSize:'17px',padding:'10px'}} > Completion of Board of Secondary School Certificate </h3>
            <p class="lead text-white" id="edubox" data-aos="zoom-in"  style={{fontWeight:'600',textTransform:'uppercase',fontSize:'14px',padding:'10px'}}>
              I've completed my Secondary School Certificate (SSC) at Care Model
              High School<code style={{color:'rgb(52 171 236)',fontWeight:'bold'}}>(2016)</code>
            </p>
          </div>
        </div>
        
      
      </div>
    </>
  );
};

export default Education;
