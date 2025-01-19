import React from 'react';
import './Home.css';  
import home from '../components/assets/images/home.png';

const handleDownload = () => {
  const link = document.createElement('a');
  link.href = '/logo.png';  
  link.download = 'home.png';      
  link.click();                      
};

function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Transforming Business with Next-Gen IT Solution</h1>
        <p>Pioneering customized IT Service from Website development to Digital Marketing that empowers your success.</p>
        <div className="cta-section">
          <button className="quote-button" onClick={handleDownload}>Get a Free Quote</button>
          <ul>
            <li><b><a href="">Visit Our Creations</a></b></li>
          </ul>
        </div>
      </div>
      <div className="image-section">
        <div className="image-wrapper">
          <img src={home} alt="Home_image" className="home-image" />
        </div>
      </div>
    </div>
  );
}

export default Home;
