// Sent.js
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import EmailTable from './EmailTable';
import EmailDetailModal from './EmailDetailModal';
import './Sent.css';

function Sent() {
    const [emailDetailVisible, setEmailDetailVisible] = useState(false);
    const [selectedEmail, setSelectedEmail] = useState(null);

    // Dummy data
    const sentEmails = [
        { subject: "Sent Email #1", body: "Body of sent email #1" },
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
            <EmailTable data={sentEmails} onEmailClick={openEmailDetailModal} isSentView={true}/>
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

export default Sent;
