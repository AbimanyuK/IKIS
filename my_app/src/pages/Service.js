import React from "react";
import './Service.css'; 
import Website_Development from '../components/assets/images/Website_Development.png';
import Web_Design from '../components/assets/images/Web_Design.png';
import Video_Editing from '../components/assets/images/Video_Editing.svg';
import SEO from '../components/assets/images/SEO.svg';
import Social_Media_Marketing from '../components/assets/images/Social_Media_Marketing.svg';
import Content_Writing from '../components/assets/images/Content_Writing.svg';
import Design from '../components/assets/images/Design.png';

function Service() {
  return (
    <div className="service-container">
      <div className="service-content">
      <h1>Our Services</h1>
      <p>Explore our Advanced IT Solutions for Modern Business</p>
      </div>
      <div className="service-cards-container">
      <div className="service-card">
      <img src={Website_Development} alt="Service" className="card-image" />
        <div className="card-content">Website Development</div>
        <div className="card-description">We create and develop responsive and engaging websites tailored to your business requirements. IKIS assures you that it will integrate the latest technologies and frameworks to reach your potential audience. Our area of expertise is in e-commerce, corporate, and portfolio websites.</div>
      </div>
      <div className="service-card">
      <img src={Web_Design} alt="Service" className="card-image" />
        <div className="card-content">Web Design</div>
        <div className="card-description">At IKIS, we craft modern and professional UI designs for your webpage using the best technologies like Figma. Present your unique identity in this digital competitive world. 
        </div>
      </div>

      <div className="service-card">
      <img src={Video_Editing} alt="Service" className="card-image" />
        <div className="card-content">Video Editing</div>
        <div className="card-description">Trending content creation and top-notch editing brings out High-quality video. This helps us to engage clients effectively. Our Services include promotional videos, reels, and explainer videos. We promise Fast delivery and creative output.</div>
      </div>
      <div className="service-card">
      <img src={SEO} alt="Service" className="card-image" />
        <div className="card-content">SEO</div>
        <div className="card-description">Website’s visibility on search engines is our primary concern. We do Keyword research, on-page optimization, and link building which are considered as results-driven strategies to enhance organic traffic.</div>
      </div>

      <div className="service-card">
      <img src={Social_Media_Marketing} alt="Service" className="card-image" />
        <div className="card-content">Social Media Marketing</div>
        <div className="card-description">Comprehensive and innovative strategies are required to grow your online presence. We do Campaign management, ad creation, and analytics reporting on various platforms like Instagram, Facebook, LinkedIn, and others to engage your exact customer segment.</div>
      </div>
      
      <div className="service-card">
      <img src={Content_Writing} alt="Service" className="card-image" />
        <div className="card-content">Content Writing</div>
        <div className="card-description">What makes your audience stay on the Page?  It is the way you educate and deliver value to them by writing.  We write Engaging, SEO-optimized content for websites and blogs. Customized solutions for diverse industries. </div>
      </div>
      </div>
      
      <div className="service-card final-card">
      <img src={Design} alt="Service" className="card-image" />
        <div className="card-content">Logo Design</div>
        <div className="card-description">Why are you still waiting? Create your own visual identity to make your business shine.  We create stunning and visually appealing logos and color palettes for your website. </div>
      </div>
    </div>
  );
}

export default Service;
