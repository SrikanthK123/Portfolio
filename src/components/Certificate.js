import React ,{useState} from "react";
import yourImage1 from '../Images/UdemyCertificate.jpg'
import yourImage2 from '../Images/CodeVita.jpg'
import yourImage3 from '../Images/NqtCertificate.jpg'
const Certificate = () => {
   

      
  
  return (
    <>
      <div className="CertificatePage" id="certificate">
      <h1 className="display-5 fw-bold text-body-emphasis" style={{textAlign:'center',marginTop:'10px'}} data-aos="zoom-in"  >Certificate</h1>
      </div>
      <div class="container my-5" >
    <div   class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
      <div class="col-lg-7 p-3 p-lg-5 pt-lg-3"data-aos="fade-up">
        <h1 class="display-4 fw-bold lh-1 text-body-emphasis" data-aos="zoom-in"> "TCS CodeVita Season-10 Certificate" </h1>
        <p class="lead" data-aos="zoom-in">I have participated in TCS CodeVita Season-10, one of the most
              challenging coding competitions and honed my technical skills and
              problem solving skills.</p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
        </div>
      </div>
      <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
          <img class="rounded-lg-3"  data-aos="zoom-in" style={{marginRight:'30px',height:'400px',borderRadius:'10px'}} src= {yourImage2} alt="" width="400"/>
      </div>
    </div>
  </div>
  <div class="container my-5" >
      <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
      <div class="col-lg-7 p-3 p-lg-5 pt-lg-3" data-aos="fade-up">
        <h1 class="display-4 fw-bold lh-1 text-body-emphasis" data-aos="zoom-in"> "TCS NQT- Cognitive " </h1>
        <p class="lead" data-aos="zoom-in">I have participated in TCS NQT- Cognitive, one of the most
              challenging competitions and honed my technical skills and
              problem solving skills.</p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
        </div>
      </div>
      <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
          <img class="rounded-lg-3"  data-aos="zoom-in"style={{marginRight:'30px',height:'400px',borderRadius:'10px'}} src= {yourImage3} alt="" width="400"/>
      </div>
    </div>
  </div>
  <div class="container my-5" >
      <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
      <div class="col-lg-7 p-3 p-lg-5 pt-lg-3" data-aos="fade-up">
        <h1 class="display-4 fw-bold lh-1 text-body-emphasis" data-aos="zoom-in">"Web Development Source" </h1>
        <p class="lead" data-aos="zoom-in">I successfully completed a comprehensive web development course on Udemy and earned a certificate (2023), showcasing my proficiency in various aspects of web development.</p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
        </div>
      </div>
      <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
          <img class="rounded-lg-3"  data-aos="zoom-in"style={{height:'400px',borderRadius:'10px'}} src= {yourImage1} alt="" width="450"/>
      </div>
    </div>
  </div>
    </>
  );
};

export default Certificate;


