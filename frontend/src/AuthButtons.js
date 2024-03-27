import React, { useState } from 'react';
import CreateAccountModal from './CreateAccountModal';
import LoginModal from './LoginModal';
import './AuthButtons.css';

function AuthButtons() {
  const [isCreateAccountModalOpen, setIsCreateAccountModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  // Function to open the create account modal
  const handleOpenCreateAccountModal = () => {
    setIsCreateAccountModalOpen(true);
  };

  // Function to close the create account modal
  const handleCloseCreateAccountModal = () => {
    setIsCreateAccountModalOpen(false);
  };

  // Function to open the login modal
  const handleOpenLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  // Function to close the login modal
  const handleCloseLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  return (
    <div className="">
      <div className='row'>
        <div className='col-5'></div>
          <a href='/inbox' className='btn auth-button border border-secondary col-2'>Login</a>
        {/* <button className='btn auth-button col-2 border border-secondary' onClick={handleOpenLoginModal}>Login</button> */}
      </div>
      <div className='row'>
        <div className='col-5'></div>
        <button className='btn auth-button col-2 border border-secondary' onClick={handleOpenCreateAccountModal}>Create Account</button>
      </div>
      {isLoginModalOpen && <LoginModal onClose={handleCloseLoginModal} />}
      {isCreateAccountModalOpen && <CreateAccountModal onClose={handleCloseCreateAccountModal} />}
    </div>
  );
}

export default AuthButtons;


