// Drafts.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Navigation/Sidebar';
import EmailTable from './EmailTable';
import ComposeModal from './Modals/ComposeModal';
import EmailDetailModal from './Modals/EmailDetailModal';
import { useNavigate } from 'react-router-dom';
import './css/Drafts.css';
import NavigateApp from './Navigation/NavigateApp';

function Drafts({ userId, setUserId, showLogout, setShowLogout }) {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [composeModalVisible, setComposeModalVisible] = useState(false);
    const [showLogoutButton, setShowLogoutButton] = useState(true);
    const [emailDetailVisible, setEmailDetailVisible] = useState(false);
    const [selectedEmail, setSelectedEmail] = useState(null);
    const [draftEmails, setDraftEmails] = useState([]);

    const handleLogout = () => {
        setUserId(null);
        navigate('/');
    };

    useEffect(() => {
        const fetchDrafts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/drafts', {
                    params: {
                        user_id: userId
                    }
                });
                setDraftEmails(response.data.emails);
            } catch (error) {
                console.error('Error fetching drafts:', error);
            }
        };

        fetchDrafts();
    }, []);

    const openComposeModal = () => setComposeModalVisible(true);
    const closeComposeModal = () => setComposeModalVisible(false);

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
            <ComposeModal onClose={closeComposeModal} visible={composeModalVisible} />
            <EmailTable data={draftEmails} onEmailClick={openEmailDetailModal} />
            {selectedEmail && emailDetailVisible && (
                <EmailDetailModal
                    email={selectedEmail}
                    onClose={closeEmailDetailModal}
                    visible={emailDetailVisible}
                />
            )}
            {/* {showLogout && (
                <button className="auth-button logout-button" onClick={handleLogout}>
                    Logout
                </button>
            )} */}
        </div>
    );
}

export default Drafts;
