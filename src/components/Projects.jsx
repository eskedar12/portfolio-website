import React, { useState } from 'react';
import './Projects.css';

// Import your project images (place these in src/assets/images/)
// You'll need to add these images to your project
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
//import weatherImg from './assets/images/weather.jpg';
//import socialApiImg from './assets/images/socialapi.jpg';

// If you don't have images yet, use these placeholder URLs
const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A beautifully designed frontend e-commerce platform showcasing products with smooth navigation and modern UI/UX patterns.',
      tech: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS'],
      demoLink: 'https://ecommerce-website-101.netlify.app',
      githubLink: 'https://github.com/eskedar12/ecommerce-website',
      image: 'src/assets/project1.png',
      features: [
  '⚛️ React 19 with TypeScript',
  '⚡ Vite for fast development',
  '🎨 Tailwind CSS + shadcn/ui',
  '🔄 TanStack Router',
  '📱 Fully responsive design',
  '🛍️ Product browsing & filtering'
]
    },
    {
  id: 2,
  title: 'Coffee Shop Website',
  description: 'A warm and inviting coffee shop website showcasing menu items, ambiance, and brand story with smooth animations.',
  tech: [, 'React', 'TypeScript', 'Tailwind CSS', 'Vite'],
  demoLink: 'https://coffeeshopwebsite101.netlify.app',
  githubLink: 'https://github.com/eskedar12/coffee_shop_web',
  image: 'src/assets/project2.png', 
  features: ['Menu Showcase', 'Smooth Animations', 'Responsive Design', 'Modern UI/UX']
},
   {
  id: 3,
  title: 'Online Bookstore',
  description: 'A curated collection of Ethiopian and African literature. Browse and discover books celebrating African voices and stories.',
  tech: ['HTML', 'CSS', 'JavaScript'],
  demoLink: 'https://eskedar12.github.io/Online_Bookstore_/',
  githubLink: 'https://github.com/eskedar12/Online_Bookstore_',
  image: 'src/assets/project3.png', 
  features: ['Ethiopian Literature', 'African Authors', 'Book Browsing', 'Responsive Design']
},
  ];

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const getVisibleProjects = () => {
    const visible = [];
    const total = projects.length;
    
    const prevIndex = (currentIndex - 1 + total) % total;
    const nextIndex = (currentIndex + 1) % total;
    
    visible.push({ ...projects[prevIndex], position: 'left' });
    visible.push({ ...projects[currentIndex], position: 'center' });
    visible.push({ ...projects[nextIndex], position: 'right' });
    
    return visible;
  };

  const handleDemoClick = (demoLink) => {
    if (demoLink && demoLink !== '#') {
      window.open(demoLink, '_blank', 'noopener,noreferrer');
    }
  };

  const handleGithubClick = (githubLink) => {
    if (githubLink && githubLink !== '#') {
      window.open(githubLink, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="section-title">
          <span className="title-icon">🚀</span> My Projects
          <span className="title-subtitle">Creative Solutions & Innovative Designs</span>
        </h2>

        <div className="carousel-3d">
          <button className="nav-btn-circle prev" onClick={prevProject}>
            ◀
          </button>

          <div className="carousel-track">
            {getVisibleProjects().map((project) => (
              <div
                key={`${project.id}-${project.position}`}
                className={`project-card-3d ${project.position}`}
              >
                <div className="card-inner">
                  <div className="card-front">
                    <div className="project-image">
                      <img src={project.image} alt={project.title} />
                    </div>
                    <div className="project-content">
                      <h3>{project.title}</h3>
                      <div className="tech-preview">
                        {project.tech.slice(0, 3).map((tech, i) => (
                          <span key={i} className="preview-tag">{tech}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="card-back">
                    <h3 className="back-title">{project.title}</h3>
                    <p className="back-description">{project.description}</p>
                    <div className="features-list">
                      <h4>Key Features:</h4>
                      <ul>
                        {project.features.map((feature, i) => (
                          <li key={i}>✓ {feature}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="full-tech">
                      <h4>Tech Stack:</h4>
                      <div className="tech-tags">
                        {project.tech.map((tech, i) => (
                          <span key={i} className="back-tag">{tech}</span>
                        ))}
                      </div>
                    </div>
                    <div className="card-buttons">
                      <button 
                        className="card-btn demo"
                        onClick={() => handleDemoClick(project.demoLink)}
                        disabled={!project.demoLink || project.demoLink === '#'}
                      >
                        Live Demo 🚀
                      </button>
                      <button 
                        className="card-btn github"
                        onClick={() => handleGithubClick(project.githubLink)}
                        disabled={!project.githubLink || project.githubLink === '#'}
                      >
                        Source Code 💻
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="nav-btn-circle next" onClick={nextProject}>
            ▶
          </button>
        </div>

        {/* Project Indicators */}
        <div className="project-indicators">
          {projects.map((_, idx) => (
            <button
              key={idx}
              className={`indicator-dot ${idx === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;