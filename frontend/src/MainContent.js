import React, { useState } from 'react';
import './css/MainContent.css'; // Make sure to import the corresponding CSS file
import AuthButtons from './AuthButtons'; // Import AuthButtons component
import teamImage from './images/image.jpg';
import CreateAccountModal from './Modals/CreateAccountModal';
import AccountCreatedModal from './Modals/AccountCreatedModal';
import logo from './images/earth.webp';


function MainContent({ userId, setUserId }) {
  const [isCreateAccountModalOpen, setIsCreateAccountModalOpen] = useState(false);
  const [isAccountCreated, setIsAccountCreated] = useState(false);

  const handleOpenCreateAccountModal = () => {
    setIsCreateAccountModalOpen(true);
  };

  const handleCloseCreateAccountModal = () => {
    setIsCreateAccountModalOpen(false);
  };

  const handleCloseAccountCreatedModal = () => {
    setIsAccountCreated(false);
  };

  return (
    <>
      <header style={{ height: '88px' }} className="header">

        <h1 style={{ fontFamily: 'Raleway' }} className="header-title fw-bold">
          <img src={logo} alt="Logo" style={{ height: '60px', paddingRight: '10px' }} />GlobalConnect
        </h1>
        <div style={{ marginTop: '10px'}}>
        <AuthButtons userId={userId} setUserId={setUserId} />
        </div>
        
      </header>
      <main className="main-content">
        <div className="text-box text-center">
          <h2>Your one-stop shop for multilingual email management</h2>
          <button className="cta-button" onClick={handleOpenCreateAccountModal}style={{ backgroundColor: '#3b71ca'}}>Discover Our AI Chatbot</button>
        </div>
        <div className="image-box">
          <img src={teamImage} alt="team" />
        </div>
      </main>
      {isCreateAccountModalOpen && (
        <CreateAccountModal onClose={handleCloseCreateAccountModal}
          handleAccountCreated={() => {
            setIsCreateAccountModalOpen(false);
            setIsAccountCreated(true);
          }}
        />
      )}
      {isAccountCreated && <AccountCreatedModal onClose={handleCloseAccountCreatedModal} />}
    </>
  );
}

export default MainContent;
