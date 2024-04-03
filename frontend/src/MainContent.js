import React, { useState } from 'react';
import './MainContent.css'; // Make sure to import the corresponding CSS file
import AuthButtons from './AuthButtons'; // Import AuthButtons component
import teamImage from './images/image.jpg';
import CreateAccountModal from './CreateAccountModal';

function MainContent() {
  const [isCreateAccountModalOpen, setIsCreateAccountModalOpen] = useState(false);

  const handleOpenCreateAccountModal = () => {
    setIsCreateAccountModalOpen(true);
  };

  const handleCloseCreateAccountModal = () => {
    setIsCreateAccountModalOpen(false);
  };
  return (
    <>
      <header className="header">
        <h1 className="header-title">Multilingual Language Translation AI Chatbot</h1>
        <AuthButtons></AuthButtons>
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
      {isCreateAccountModalOpen && <CreateAccountModal onClose={handleCloseCreateAccountModal} />}
    </>
  );
}

export default MainContent;
