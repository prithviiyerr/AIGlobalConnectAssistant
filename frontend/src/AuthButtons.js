import React, { useState } from 'react';
// import CreateAccountModal from './CreateAccountModal';
import LoginModal from './LoginModal';

import './AuthButtons.css';

function AuthButtons({ userId, setUserId }) {
  // const [isCreateAccountModalOpen, setIsCreateAccountModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  // Function to open the create account modal
  // const handleOpenCreateAccountModal = () => {
  //   setIsCreateAccountModalOpen(true);
  // };

  // Function to close the create account modal
  // const handleCloseCreateAccountModal = () => {
  //   setIsCreateAccountModalOpen(false);
  // };

  // Function to open the login modal
  const handleOpenLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  // Function to close the login modal
  const handleCloseLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  return (
    <div className="auth-buttons-container">
      <button className='auth-button login-button' onClick={handleOpenLoginModal}>Login</button>
      {isLoginModalOpen && <LoginModal userId={userId} setUserId={setUserId} onClose={handleCloseLoginModal}/>}
    </div>
  );
}

export default AuthButtons;



