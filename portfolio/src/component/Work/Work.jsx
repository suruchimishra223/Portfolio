// src/components/Work/Work.jsx
import React, { useEffect } from "react";
import "../../App.css";
import "aos/dist/aos.css";
import AOS from "aos";

const Work = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio showcasing my skills and projects. Integrated EmailJS for contact form.",
      tech: ["HTML", "CSS", "JavaScript", "React", "EmailJS", "AOS"],
      link: "https://mishraportfolio-85.netlify.app",
      source: "https://github.com/your-username/portfolio", // 👈 Add GitHub link
      // image: "/port.png",
    },
    {
      title: "E-commerce App",
      description:
        "An e-commerce platform with product listing, cart system, and secure checkout.",
      tech: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js", "MongoDB"],
      link: "https://yourecommerce.com",
      source: "https://github.com/your-username/ecommerce", // 👈 Add GitHub link
      // image: "https://source.unsplash.com/600x400/?ecommerce,shop",
    },
    {
      title: "Gym Management System",
      description:
        "A management system for gyms with member tracking and backend API integration.",
      tech: ["React", "Node.js", "Express", "MongoDB", "AOS"],
      link: "https://backend-gym-2xem.vercel.app/",
      source: "https://github.com/suruchimishra223/Backend-gym", // 👈 Add GitHub link
      // image: "/gym.png",
    },
  ];

  return (
    <section id="work" className="work-section">
      {/* Header */}
      <div className="work-header" data-aos="fade-up">
        <h2>💻 My Recent Work</h2>
        <div className="divider"></div>
        <p>Here are some of the projects I have recently worked on 🚀</p>
      </div>

      {/* Cards */}
      <div className="work-cards">
        {projects.map((project, index) => (
          <div
            key={index}
            className="work-card"
            data-aos="zoom-in"
            data-aos-delay={index * 200}
          >
            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />

            <h3>{project.title}</h3>
            <p className="description">{project.description}</p>

            <div className="tech-stack">
              {project.tech.map((t, i) => (
                <div key={i} className="tech-box">
                  {t}
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="project-buttons">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                🚀 Live Demo
              </a>
              <a
                href={project.source}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link source-btn"
              >
                📂 Source Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
