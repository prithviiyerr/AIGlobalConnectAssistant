import React, { useState } from 'react';
import './MainContent.css'; // Make sure to import the corresponding CSS file
import AuthButtons from './AuthButtons'; // Import AuthButtons component
import teamImage from './images/image.jpg';
import CreateAccountModal from './CreateAccountModal';
import AccountCreatedModal from './AccountCreatedModal';
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
      <header className="header">
        <h1 className="header-title">Multilingual Language Translation AI Chatbot</h1>
        <AuthButtons userId={userId} setUserId={setUserId}/>
      </header>
      <main className="main-content">
        <div className="text-box">
          <h2>Your one-stop shop for multilingual text translation and generation, tailored specifically for business-related emails</h2>
          <button className="cta-button" onClick={handleOpenCreateAccountModal}>Discover Our AI Chatbot</button>
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
