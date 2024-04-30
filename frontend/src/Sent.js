import React, { useState } from 'react';
import Sidebar from './Sidebar';
import EmailTable from './EmailTable';
import ComposeModal from './ComposeModal';
import EmailDetailModal from './EmailDetailModal';
import { useNavigate } from 'react-router-dom';
import './Sent.css';

function Sent({ userId, setUserId, showLogout, setShowLogout }) {
    const navigate = useNavigate();
    const [composeModalVisible, setComposeModalVisible] = useState(false);
    const [emailDetailVisible, setEmailDetailVisible] = useState(false);
    const [selectedEmail, setSelectedEmail] = useState(null);

    // Dummy data
    const sentEmails = [
        { subject: "Sent Email #1", body: "Body of sent email #1" },
    ];

    const openComposeModal = () => setComposeModalVisible(true);
    const closeComposeModal = () => setComposeModalVisible(false);


    const handleLogout = () => {
        setUserId(null);
        navigate('/');
      };

    const openEmailDetailModal = (email) => {
        setSelectedEmail(email);
        setEmailDetailVisible(true);
    };

    const closeEmailDetailModal = () => {
        setSelectedEmail(null);
        setEmailDetailVisible(false);
    };

    return (
        <div className='container mt-5'>
            <Sidebar />
            <Sidebar onCompose={openComposeModal} />
            <ComposeModal onClose={closeComposeModal} visible={composeModalVisible} />
            <EmailTable data={sentEmails} onEmailClick={openEmailDetailModal} isSentView={true} />
            {selectedEmail && emailDetailVisible && (
                <EmailDetailModal
                    email={selectedEmail}
                    onClose={closeEmailDetailModal}
                    visible={emailDetailVisible}
                />
            )}
            {showLogout && (
        <button className="auth-button logout-button" onClick={handleLogout}>
          Logout
        </button>
      )}
        </div>
    );
}

export default Sent;
