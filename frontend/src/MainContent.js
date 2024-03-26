import React from 'react';
import './MainContent.css'; // Make sure to import the corresponding CSS file
import teamImage from './images/images.jpg';


function MainContent() {
  return (
    <main className="main-content">
      <div className="text-box">
        <h2>Your one-stop shop for multilingual text translation and generation, tailored specifically for business-related emails</h2>
      </div>
      <div className="image-box">
        {/* Assuming you have an image you want to display */}
        <img src={teamImage} alt="Teamwork" style={{ width: '500px', height: 'auto' }} />

      </div>
    </main>
  );
}

export default MainContent;