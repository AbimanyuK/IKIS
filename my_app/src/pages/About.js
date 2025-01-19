import React from "react";
import './About.css';  
import about_linkedin from '../components/assets/images/about_linkedin.png';
import about_instagram from '../components/assets/images/about_instagram.png';

function About() {
  return (
      <div className="about-container">
        <div className="about-content">
          <h1>Who Are We</h1>
          <p>We are a passionate IT solutions firm that delivers exceptional and customized digital experiences to you! Our dynamic experts specialize in web development, video editing, SEO, Digital marketing, and content writing. With a keen focus on innovation and promised quality, we help businesses easily unlock their digital presence.
          </p>
        </div>
        <div className="about__images">
        <a href="https://www.instagram.com/ikis.io?igsh=dDFtdjg1bzRveGRh" target="_blank" rel="noopener noreferrer">
          <img src={about_instagram} alt="Instagram_image" className="about_instagram" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <img src={about_linkedin} alt="Linkedin_image" className="about_linkedin" />
        </a>
        </div>
      </div>
  );
}

export default About;
