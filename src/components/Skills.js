import React from 'react'
import { SkillsList } from './InformationCard'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const Skills = () => {
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
    <div className='SkillsPage' id='skills'>
    <div class="container px-4" id="custom-cards">
    <div style={{display:'flex',justifyContent:'center'}}>
    <h2 className="fw-bold text-body-emphasis p-2 my-4" style={{textAlign:'center',fontFamily:'-moz-initial',backgroundColor:'skyblue',borderRadius:'15px' ,boxShadow:'rgba(0, 0, 0, 0.24) 0px 3px 8px'}} >Skills</h2>
</div>
    
<Slider {...settings}  >
      {
        SkillsList.map((item,index)=>(
          <div class="col"  >
          <div class="card" id='SkillsCard'>
        <div class="header">
          <div class="image">
            <img src= {`${item.Icon}`} alt='Language' style={{width:'50px',height:'50px'}} />
          </div>
          <div class="content">
             <span class="title"> {item.Title} </span>
             <p class="message"> {item.Desc.slice(0,100)}.... </p>
          </div>
           <div class="actions my-4">
            <a href={`${item.Url}`}>
             <button class="desactivate" type="button">Learn</button>
             </a>
          </div>
        </div>
        </div>
        </div>
        ))
      }
  
  </Slider>
  </div>
  </div>
    </>
  )
}

export default Skills
