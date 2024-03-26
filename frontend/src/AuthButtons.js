// import React from 'react';
// import './AuthButtons.css'; // Make sure to import the CSS file

// function AuthButtons() {
//   return (
//     <div className="auth-buttons">
//       <button className="auth-button">Login</button>
//       <button className="auth-button">Create Account</button>
//     </div>
//   );
// }

// export default AuthButtons;

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
    <div className="auth-buttons">
      <button className="auth-button" onClick={handleOpenLoginModal}>Login</button>
      <button className="auth-button" onClick={handleOpenCreateAccountModal}>Create Account</button>
      
      {isLoginModalOpen && <LoginModal onClose={handleCloseLoginModal} />}
      {isCreateAccountModalOpen && <CreateAccountModal onClose={handleCloseCreateAccountModal} />}
    </div>
  );
}

export default AuthButtons;


