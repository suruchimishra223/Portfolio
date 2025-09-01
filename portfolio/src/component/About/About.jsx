import React, { useEffect } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import AOS from "aos";
import "aos/dist/aos.css";
import "../../App.css";

const About = () => {
  // AOS initialize
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* Left Side */}
        <div className="about-left" data-aos="fade-right">
          <h1 className="greeting">Hi, I am</h1>
          <h2 className="name">Suruchi Mishra</h2>

          <h3 className="skills">
            <span>I am a </span>
            <ReactTypingEffect
              text={[
                'Fullstack Developer',
                'Frontend Developer',
                'UI/UX Designer',
                'Coder',
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="cursor">{cursor}</span>
              )}
            />
          </h3>

          <p className="about-text">
            I am a motivated and enthusiastic aspiring full-stack developer, 
            eager to apply my skills through internships. I have hands-on knowledge
            of building web applications using the MERN stack and other modern technologies.
            My focus is on creating seamless user experiences and efficient solutions while
            continuously learning and improving my development skills.
          </p>

          <a
            href="/Suruchi Kumari.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-button"
          >
            DOWNLOAD CV
          </a>
        </div>

        {/* Right Side */}
        <div className="about-right" data-aos="fade-left">
          <Tilt
            className="tilt-image"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src="/personal.jpeg"   // ✅ public folder image fix
              alt="Suruchi Mishra"
              className="profile-image"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
