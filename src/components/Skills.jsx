import React, { useEffect, useRef, useState } from 'react';
import './Skills.css';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const frontendSkills = [
    { name: 'HTML/CSS', percentage: 95 },
    { name: 'JavaScript', percentage: 85 },
    { name: 'React', percentage: 75 }
  ];

  const backendSkills = [
    { name: 'Node.js', percentage: 30 },
    { name: 'Python', percentage: 75 },
    { name: 'PHP', percentage: 60 },
    { name: 'MySQL', percentage: 70 }
  ];

  const toolsSkills = [
    { name: 'Git', percentage: 90 },
    { name: 'Figma', percentage: 65 },
    { name: 'VS Code', percentage: 95 }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const SkillColumn = ({ title, skills }) => (
    <div className="skill-column">
      <h3 className="column-title">{title}</h3>
      <div className="column-skills">
        {skills.map((skill, index) => (
          <div 
            key={skill.name} 
            className="column-skill-item"
            style={{ '--delay': `${index * 0.1}s` }}
          >
            <div className="skill-row">
              <span className="skill-name-text">{skill.name}</span>
              <span className="skill-percentage-text">{skill.percentage}%</span>
            </div>
            <div className="progress-bar">
              <div 
                className="progress-fill"
                style={{ width: isVisible ? `${skill.percentage}%` : '0%' }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills" className="skills-section" ref={sectionRef}>
      <div className="skills-container">
        <h2 className="skills-title">My Skills</h2>
        
        <div className="skills-three-columns">
          <SkillColumn title="Frontend Development" skills={frontendSkills} />
          <SkillColumn title="Backend Development" skills={backendSkills} />
          <SkillColumn title="Tools & Others" skills={toolsSkills} />
        </div>
      </div>
    </section>
  );
};

export default Skills;