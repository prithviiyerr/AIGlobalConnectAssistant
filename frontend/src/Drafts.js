// Drafts.js
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import EmailTable from './EmailTable';
import EmailDetailModal from './EmailDetailModal'; 
import './Drafts.css'; // Ensure you have the CSS for drafts

function Drafts() {
    const [emailDetailVisible, setEmailDetailVisible] = useState(false);
    const [selectedEmail, setSelectedEmail] = useState(null);

    // Dummy data for drafts
    const draftEmails = [
        { subject: "Drafted Email #1 Subject", body: "Drafted Email #1 Body" },
        
    ];

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
            <EmailTable data={draftEmails} onEmailClick={openEmailDetailModal} />
            {selectedEmail && emailDetailVisible && (
                <EmailDetailModal
                    email={selectedEmail}
                    onClose={closeEmailDetailModal}
                    visible={emailDetailVisible}
                />
            )}
        </div>
    );
}

export default Drafts;
