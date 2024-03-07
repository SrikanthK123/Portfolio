import React ,{useState} from "react";
import CertificateGif from "../Images/CertificateGif.gif"
import { CertificateInfo } from "./InformationCard";
const Certificate = () => {
   

      
  
  return (
    <>
      <div className="CertificatePage" id="certificate">
        <div style={{display:'flex',justifyContent:'center'}}>
      <h2 className=" fw-bold text-body-emphasis p-2 my-4" style={{textAlign:'center',fontFamily:'-moz-initial',backgroundColor:'skyblue',borderRadius:'15px' ,boxShadow:'rgba(0, 0, 0, 0.24) 0px 3px 8px'}} data-aos="zoom-in"  >Certificate</h2>
      </div>

  <div className="container">
  <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center ">
    {
      CertificateInfo.map((item,index)=>(
        <div className="col">
               <div class="card" id="CertificateCard" style={{
  height: '50vh',
  backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2)), url(${item.ImageUrl})`,
  backgroundPosition: 'center',
  backgroundSize: '100% 100%',
  backgroundRepeat: 'no-repeat',
  borderRadius: '15px',
}}
>
    <div className="card-body" id="certificateTitleName" style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
      <div  >
        <img src={ CertificateGif} alt="Image" style={{width:'70px',height:'70px'}}/>
      <p className=" text-white" id="certificateName" style={{fontSize:'18px'}}>{item.Title}</p>
     
      </div>
     

    </div>

				</div>
          </div>
      ))
    }

  </div></div>
 
  </div>
    </>
  );
};

export default Certificate;


