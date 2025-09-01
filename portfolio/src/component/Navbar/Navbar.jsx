import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import "../../App.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // 50px scroll ke baad effect
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="logo">Suruchi Mishra</div>

        <ul className="menu">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#education">Education</a></li>
        </ul>

        <div className="social-icons">
          <a href="https://github.com/suruchimishra223" target="_blank" rel="noopener noreferrer"><FaGithub size={24} /></a>
          <a href="https://www.linkedin.com/in/suruchi-mishra" target="_blank" rel="noopener noreferrer"><FaLinkedin size={24} /></a>
        </div>

        <div className="mobile-menu-icon" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX size={30} /> : <FiMenu size={30} />}
        </div>
      </div>

      {isOpen && (
        <div className="mobile-menu">
          <ul>
            <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
            <li><a href="#skills" onClick={() => setIsOpen(false)}>Skills</a></li>
            <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
            <li><a href="#education" onClick={() => setIsOpen(false)}>Education</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
