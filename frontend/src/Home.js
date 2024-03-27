import React from 'react';
import MainContent from './MainContent';
import AuthButtons from './AuthButtons';

function Home() {
  return (
    <div className='container mt-5'>
      <div className='row'>
        <MainContent />
      </div>
      <div className='row mt-5'>
        <AuthButtons />
      </div>
    </div>
  );
}

export default Home;
