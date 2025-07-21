import React from 'react';
import '../styles/SkillsMarquee.css';

const SkillsMarquee = () => {
  const skills = [
    "HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Git", "Responsive Design"
  ];

  return (
    <section className="skills-marquee">
      <div className="marquee">
        <div className="track">
          {skills.map((skill, idx) => (
            <div className="skill-item" key={idx}>{skill}</div>
          ))}
          {skills.map((skill, idx) => (
            <div className="skill-item" key={`repeat-${idx}`}>{skill}</div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsMarquee;
