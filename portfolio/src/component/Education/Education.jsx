import React from "react";
import { FaGraduationCap, FaCalendarAlt, FaAward } from "react-icons/fa";

import "../../App.css";

const Education = () => {
  const education = [
    {
      id: 1,
      degree: "Bachelor of Science in Computer Science",
      school: "Chaudhary Charan Singh University",
      date: "2023 - 2026",
      grade: "8.5/10",
      desc: "Studied core computer science subjects and participated in multiple projects.",
      img: "/logo2.png", // ✅ public folder ka sahi path
    },
    {
      id: 2,
      degree: "Higher Secondary Education (Science Stream)",
      school: "Govt Girls Inter College (UP Board)",
      date: "2021 - 2023",
      grade: "9.2/10",
      desc: "Completed senior secondary education with focus on Science stream.",
      img: "/logo1.png", // ✅ public folder ka sahi path
    },
  ];

  return (
    <section id="education" className="education-section">
      <div className="education-header">
        <h2>EDUCATION</h2>
        <div className="header-underline"></div>
        <p>
          My education has been a journey of learning and development. Here are
          the details of my academic background.
        </p>
      </div>

      <div className="education-timeline">
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`education-item ${index % 2 === 0 ? "left" : "right"}`}
          >
            <div className="timeline-circle">
              <img src={edu.img} alt={edu.school} />
            </div>

            <div className="education-content">
              <div className="education-header-content">
                <div className="school-logo">
                  <img src={edu.img} alt={edu.school} />
                </div>
                <div>
                  <h3 className="edu-degree">
                    <FaGraduationCap className="icon-inline" /> {edu.degree}
                  </h3>
                  <h4>{edu.school}</h4>
                  <p className="edu-date">
                    <FaCalendarAlt className="icon-inline" /> {edu.date}
                  </p>
                </div>
              </div>
              <p className="edu-grade">
                <FaAward className="icon-inline" /> Grade: {edu.grade}
              </p>
              <p className="edu-desc">{edu.desc}</p>
            </div>
          </div>
        ))}
        <div className="timeline-line"></div>
      </div>
    </section>
  );
};

export default Education;
