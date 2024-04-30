// Drafts.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import EmailTable from './EmailTable';
import ComposeModal from './ComposeModal';
import EmailDetailModal from './EmailDetailModal';
import { useNavigate } from 'react-router-dom';
import './Drafts.css';

function Drafts({ userId, setUserId, showLogout, setShowLogout }) {
    const navigate = useNavigate();
    const [composeModalVisible, setComposeModalVisible] = useState(false);
    const [showLogoutButton, setShowLogoutButton] = useState(true);
    const [emailDetailVisible, setEmailDetailVisible] = useState(false);
    const [selectedEmail, setSelectedEmail] = useState(null);
    const [draftEmails, setDraftEmails] = useState([]);

    // Dummy data for drafts
    // const draftEmails = [
    //     { subject: "Drafted Email #1 Subject", body: "Drafted Email #1 Body" },

    // ];

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
            <Sidebar />
            <Sidebar onCompose={openComposeModal} />
            <ComposeModal onClose={closeComposeModal} visible={composeModalVisible} />
            <EmailTable data={draftEmails} onEmailClick={openEmailDetailModal} />
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

export default Drafts;
