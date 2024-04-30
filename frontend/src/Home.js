import React from 'react';
import MainContent from './MainContent';

function Home({ userId, setUserId }) {
  return (
    <div className='container mt-5'>
      <div className='row'>
        <MainContent userId={userId} setUserId={setUserId}/>
      </div>
      <div className='row mt-5'>
      </div>
    </div>
  );
}

export default Home;
