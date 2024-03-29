import React from "react";

const About = () => {
  return (
    <>
      <div className="AboutPage" id="about" >
        <div className=" py-5 px-3  text-center" data-aos="fade-in">
          <div style={{display:'flex',justifyContent:'center'}}>
        <h2 className="fw-bold text-body-emphasis p-2 my-4" style={{textAlign:'center',fontFamily:'-moz-initial',backgroundColor:'skyblue',borderRadius:'15px' ,boxShadow:'rgba(0, 0, 0, 0.24) 0px 3px 8px'}} >About Me</h2>
        </div>
          <div className="col-lg-6 mx-auto">
            <p className="lead mb-4 text-black" id="para" data-aos="fade-up">
              👋 I'm an aspiring MERN stack developer, eager to kickstart my journey in the world of web development. Excited to share my passion for creating dynamic and interactive websites using the MERN stack. I have a solid foundation in the fundamental concepts of HTML, CSS, and JavaScript, which form the building blocks of web development.
            </p>
            <p className="lead mb-4 text-black" id="para" data-aos="fade-up">
              🚀 In my learning journey, I have discovered the immense potential of the MERN stack, which combines 🌐 MongoDB, 🚂 Express.js, ⚛️ React.js, and 🚀 Node.js. This powerful combination allows for the development of feature-rich web applications that leverage both frontend and backend technologies. On the frontend, I'm honing my skills in React.js, a popular JavaScript library for building user interfaces.
            </p>
            <p className="lead mb-4 text-black" id="para" data-aos="fade-up"> I enjoy creating responsive and intuitive designs using React's component-based approach. I'm also familiarizing myself with state management using libraries like Redux, which enable efficient data flow within the application. While my experience might be limited, I'm passionate about solving problems and building practical projects. I'm excited to collaborate with others, contribute to open-source projects, and engage in continuous learning to refine my skills.</p>
            <p className="lead mb-4 text-black" id="para" data-aos="fade-up">
              🌟 Please take a moment to browse through my portfolio to see the projects I've been working on. I'm thrilled to connect with fellow developers, potential collaborators, and mentors who share my passion for MERN stack development. Let's embark on this exciting journey together!"
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
