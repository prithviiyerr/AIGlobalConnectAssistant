import React, { useState } from 'react';
import EmailTable from './EmailTable';
import ComposeModal from './Modals/ComposeModal';
import EmailDetailModal from './Modals/EmailDetailModal';
import { useNavigate } from 'react-router-dom';
import './css/Sent.css';
import NavigateApp from './Navigation/NavigateApp';

function Sent({ userId, setUserId, showLogout, setShowLogout }) {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [composeModalVisible, setComposeModalVisible] = useState(false);
    const [emailDetailVisible, setEmailDetailVisible] = useState(false);
    const [selectedEmail, setSelectedEmail] = useState(null);

    // Dummy data
    const sentEmails = [
        { sender: "To: John Smith", subject: "Progress Report", body: "Below I've attached a copy of my progress" },
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
            <NavigateApp onCompose={openComposeModal} setSearchTerm={setSearchTerm} />
            <div>
                <EmailTable data={sentEmails} onEmailClick={openEmailDetailModal} searchTerm={searchTerm} />
                <ComposeModal userId={userId} setUserId={setUserId} onClose={closeComposeModal} visible={composeModalVisible} />
                <EmailDetailModal email={selectedEmail} onClose={closeEmailDetailModal} visible={emailDetailVisible} />
            </div>
            {/* {showLogout && (
        <button className="auth-button logout-button" onClick={handleLogout}>
          Logout
        </button>
      )} */}
        </div>
    );
}

export default Sent;
