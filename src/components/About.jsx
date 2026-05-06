import React from 'react';
import './About.css';
// Import your image - adjust the path based on where you store it
import pr2Image from '../assets/pr2.png';

const About = () => {
  const techStack = [
    'React', 'Node.js', 'JavaScript', 'Python',
    'HTML/CSS', 'MongoDB', 'Express', 'Git'
  ];

  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="intro">
              I'm a front-end developer with over 2 years of experience
              in building web applications.
            </p>
            <p>
             I started my journey in web development when I built my first website in college. 
             Since then, I’ve been continuously learning and improving my skills by building projects 
             and exploring modern web technologies. I enjoy turning ideas into real, functional websites through code.
            </p>
            <p>
I focus on building responsive and user-friendly web applications that solve real problems. 
Using technologies like React, JavaScript, and CSS, I create clean, efficient, and modern websites. 
I pay attention to performance, design, and user experience to ensure every project delivers real value.
</p>
          </div>
          
          <div className="about-image">
            <div className="image-container">
              <img 
                src={pr2Image} 
                alt="Developer profile" 
                className="profile-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;