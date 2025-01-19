import React from "react";
import './Faq.css';
import Emailform from '../components/Emailform.jsx'

function faq() {
  return (
    <div className="faq-container">
        <div className="faq-content">
          <h1>We’re here to help you out</h1>
          <p>Have a project in mind? Let us know and we’ll turn it into reality. </p>
          <Emailform/>
          <p>+91 9486111784</p>
          <p>privatelimitedikis@gmail.com</p>
        </div>
    </div>
  );
}

export default faq;