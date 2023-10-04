import React from "react";
import "@fortawesome/fontawesome-free/css/all.css";
const Education = () => {
  return (
    <>
      <div className="Education" id="education">
      <h1 className="display-5 fw-bold text-body-emphasis" style={{textAlign:'center'}} >Education</h1>
        <div class="container my-5" >
          <div class="p-5 text-center bg-body-tertiary rounded-3">
            <h1 class="text-body-emphasis">
              <i class="fa fa-graduation-cap" aria-hidden="true"></i>
            </h1>
            <h3>Bachelor of Technology</h3>
            <p class="lead">
              I've completed my bachelor's degree in Computer Science and
              Engineering at Aurora’s Technological & Research Institute,
              Hyderabad<code>(2022)</code>
            </p>
          </div>
        </div>

        <div class="container my-5" id="edubox" >
          <div class="p-5 text-center bg-body-tertiary rounded-3">
            <h1 class="text-body-emphasis">
              <i class="fa fa-university" aria-hidden="true"></i>
            </h1>
            <h3>Completion of Board of Intermediate Public Examination</h3>
            <p class="lead">
              I've completed my Higher Secondary School Certificate (HSSC) in
              Maths, Physics and Chemistry (MPC) at Sri Chaitanya Junior
              Kalasala <code>(2018)</code>
            </p>
          </div>
        </div>

        <div class="container my-5" id="edubox" >
          <div class="p-5 text-center bg-body-tertiary rounded-3">
            <h1 class="text-body-emphasis">
              <i className="fas fa-school"></i>
            </h1>
            <h3> Completion of Board of Secondary School Certificate </h3>
            <p class="lead" id="edubox">
              I've completed my Secondary School Certificate (SSC) at Care Model
              High School<code>(2016)</code>
            </p>
          </div>
        </div>
        
      s
      </div>
    </>
  );
};

export default Education;
