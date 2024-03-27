import React from 'react';
import './MainContent.css'; // Make sure to import the corresponding CSS file
import teamImage from './images/image.jpg';


function MainContent() {
  return (
    <main className="container">
      <div className='row'>
        <div className='col-6'>
          <div className="text-box">
            <h2>Your one-stop shop for multilingual text translation and generation, tailored specifically for business-related emails</h2>
          </div>
        </div>
        <div className='col-1'>

        </div>
        <div className="col-2">
        <img className='border border-black' src={teamImage} alt="team" style={{ width: '500px', height: 'auto' }} />

      </div>
      </div>


    </main>
  );
}

export default MainContent;