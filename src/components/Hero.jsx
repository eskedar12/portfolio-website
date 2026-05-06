import React, { useState, useEffect } from 'react';
import './Hero.css';
import profile from "../assets/picture.png";


const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = ["Front-end Developer", "3rd year Computer Science Student"];

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, words]);

  const scrollToContact = () => {
    const contact = document.getElementById('contact');
    if (contact) {
      contact.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const projects = document.getElementById('projects');
    if (projects) {
      projects.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h2 className="hero-title">
             Hello there!<span className="wave">👋🏻</span>
            </h2>
            <h1 className="main-title">I'm <span className="name-highlight">Eskedar Nigussie </span> </h1>
            <h2 className="hero-subtitle">{text}<span className="cursor">|</span></h2>
            <p className="hero-description">
             I design and build modern web applications that are both visually engaging and highly functional. 
             I’m driven by a passion for turning ideas into real solutions and creating smooth, enjoyable user experiences.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary" onClick={scrollToContact}>
                Get In Touch
              </button>
              <button className="btn-secondary" onClick={scrollToProjects}>
                View Projects
              </button>
            </div>
          </div>
         <div className="hero-image">
  <div className="image-wrapper">
    <img 
      src={profile}
      alt="Eskedar Nigussie"
      className="profile-image"
    />
  </div>
</div>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <h3>2+</h3>
            <p>Years Experience</p>
          </div>
          <div className="stat">
            <h3>10+</h3>
            <p>Projects Completed</p>
          </div>
          <div className="stat">
            <h3>2</h3>
            <p>Happy Clients</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
