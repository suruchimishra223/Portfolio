// src/component/Skills/Skills.jsx
import React, { useEffect } from "react";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss } from "react-icons/si";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../App.css";

const skillsData = [
  // Frontend Skills
  { name: "HTML", level: 90, icon: <FaHtml5 className="skill-icon html" /> },
  { name: "CSS", level: 85, icon: <FaCss3Alt className="skill-icon css" /> },
  { name: "Tailwind CSS", level: 80, icon: <SiTailwindcss className="skill-icon tailwind" /> },
  { name: "JavaScript", level: 80, icon: <FaJsSquare className="skill-icon js" /> },
  { name: "React", level: 75, icon: <FaReact className="skill-icon react" /> },
  // Backend Skills (MERN)
  { name: "Node.js", level: 65, icon: <FaNodeJs className="skill-icon node" /> },
  { name: "Express.js", level: 60, icon: <SiExpress className="skill-icon express" /> },
  { name: "MongoDB", level: 65, icon: <SiMongodb className="skill-icon mongodb" /> },
  // Tools
  { name: "Git / GitHub", level: 80, icon: <FaGithub className="skill-icon github" /> },
];

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-title" data-aos="fade-up">My Skills</h2>
      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <div 
            key={index} 
            className="skill-card" 
            data-aos="zoom-in" 
            data-aos-delay={index * 150} // staggered animation
          >
            {skill.icon}
            <h3 className="skill-name">{skill.name}</h3>
            <div className="skill-bar-container">
              <div
                className="skill-bar"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
            <p className="skill-level">{skill.level}%</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
