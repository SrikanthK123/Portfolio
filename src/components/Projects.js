import React from 'react';
import Slider from 'react-slick';
import {
  Link
} from "react-router-dom";
import { ProjectList } from "./InformationCard";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows : false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className='ProjectPage' id='projects'>
        <div className="container px-4 py-5" id="custom-cards">
        <div style={{display:'flex',justifyContent:'center'}}>
        <h2 className="fw-bold text-body-emphasis p-2 my-4" style={{textAlign:'center',fontFamily:'-moz-initial',backgroundColor:'skyblue',borderRadius:'15px' ,boxShadow:'rgba(0, 0, 0, 0.24) 0px 3px 8px'}} >Projects</h2>
</div>
          <Slider {...settings}  >
            {ProjectList.map((item, index) => (
              <div className="col" key={index} >
                 <a href= {`${item.projectUrl}`} style={{textDecoration:'none'}}>
                  <div className="card" id="ProjectCards">
                    <div className="icon">
                      <img src={item.Icon} alt='icon' style={{ width: '50px', height: '50px' }} />
                    </div>
                    <p className="title" style={{ fontSize: '10px' }}>{item.Title}</p>
                    <p className="text" style={{ fontSize: '9px' }}>{item.Desc.slice(0, 80)}....</p>
                  </div>
                </a>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Projects;
