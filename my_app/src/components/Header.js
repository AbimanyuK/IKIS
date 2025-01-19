import React from 'react';
import './Header.css';
import Header_Logo from './assets/images/Header_Logo.png';

  export const handleContactClick = (redirectToGmail = false) => {
    if (redirectToGmail) {
    const recipientEmail = "privatelimitedikis@gmail.com"; 
    const gmailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipientEmail}`;
    window.open(gmailtoLink, "_blank");
    }
    };

const Header = () => {
  return (
    <nav className="header">
      <div className="logo">
        <img src={Header_Logo} alt="Logo" className="logo-img" />
      </div>
      <ul className="header-list">
        <li><a href="/IKIS/#home">Home</a></li>
        <li><a href="/IKIS/#about">About Us</a></li>
        <li><a href="/IKIS/#services">Services</a></li>
        <li><a href="/IKIS/#services">Blog</a></li>
        <li><a href="/IKIS/#faq">FAQ</a></li>
        
      </ul>
      <button className="contact-button" onClick={handleContactClick}>
        Contact Us
      </button>
    </nav>
  );
};

export default Header;

