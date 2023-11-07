import React from "react";

const About = () => {
  return (
    <>
      <div className="AboutPage" id="about" >
        <div className="px-4 py-5  text-center" data-aos="fade-in">
          <h1 className="display-5 fw-bold text-body-emphasis" data-aos="zoom-in" >About Me</h1>
          <div className="col-lg-6 mx-auto">
            <p className="lead mb-4" id="para" data-aos="fade-up">
              👋 I'm an aspiring MERN stack developer, eager to kickstart my journey in the world of web development. Excited to share my passion for creating dynamic and interactive websites using the MERN stack. I have a solid foundation in the fundamental concepts of HTML, CSS, and JavaScript, which form the building blocks of web development.
            </p>
            <p className="lead mb-4" id="para" data-aos="fade-up">
              🚀 In my learning journey, I have discovered the immense potential of the MERN stack, which combines 🌐 MongoDB, 🚂 Express.js, ⚛️ React.js, and 🚀 Node.js. This powerful combination allows for the development of feature-rich web applications that leverage both frontend and backend technologies. On the frontend, I'm honing my skills in React.js, a popular JavaScript library for building user interfaces. I enjoy creating responsive and intuitive designs using React's component-based approach. I'm also familiarizing myself with state management using libraries like Redux, which enable efficient data flow within the application. While my experience might be limited, I'm passionate about solving problems and building practical projects. I'm excited to collaborate with others, contribute to open-source projects, and engage in continuous learning to refine my skills.
            </p>
            <p className="lead mb-4" id="para" data-aos="fade-up">
              🌟 Please take a moment to browse through my portfolio to see the projects I've been working on. I'm thrilled to connect with fellow developers, potential collaborators, and mentors who share my passion for MERN stack development. Let's embark on this exciting journey together!"
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
