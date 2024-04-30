import React, { useState } from 'react';
import Sidebar from './Sidebar';
import EmailTable from './EmailTable';
import ComposeModal from './ComposeModal';
import EmailDetailModal from './EmailDetailModal'; 
import { useNavigate } from 'react-router-dom';
import './Inbox.css';

function Inbox({ userId, setUserId, showLogout, setShowLogout }) {
    const navigate = useNavigate();
    const [composeModalVisible, setComposeModalVisible] = useState(false);
    // State for the Email Detail Modal visibility and selected email
    const [emailDetailVisible, setEmailDetailVisible] = useState(false);
    const [selectedEmail, setSelectedEmail] = useState(null);

    const dummyData = [
        { subject: "Hello", body: "Just wanted to say hi!" },
        { subject: "Meeting Reminder", body: "Don't forget about our meeting tomorrow." },
        { subject: "Important Update", body: "Please read the attached document for important updates." },
        { subject: "Request for Feedback", body: "Your feedback is valuable to us. Please share your thoughts." },
        { subject: "Weekly Newsletter", body: "Check out our latest newsletter for updates." },
        { subject: "Follow-up on Project", body: "Just following up on the progress of our project." },
        { subject: "Vacation Request Approved", body: "Your vacation request has been approved. Enjoy your time off!" },
        { subject: "Your Order Confirmation", body: "Confirmation for your recent order. Thank you for shopping with us." }
    ];
    const openComposeModal = () => setComposeModalVisible(true);
    const closeComposeModal = () => setComposeModalVisible(false);

    const handleLogout = () => {
        setUserId(null);
        navigate('/');
      };

    const openEmailDetailModal = (email) => {
        setSelectedEmail(email); // Set the selected email
        setEmailDetailVisible(true); // Show the detail modal
    };

    const closeEmailDetailModal = () => setEmailDetailVisible(false);

    return (
        <div className='container mt-5'>
            <Sidebar onCompose = {openComposeModal}/>
            <EmailTable data={dummyData} onEmailClick={openEmailDetailModal}/>
            <ComposeModal userId={userId} setUserId={setUserId} onClose={closeComposeModal} visible={composeModalVisible} />
            <EmailDetailModal email={selectedEmail} onClose={closeEmailDetailModal} visible={emailDetailVisible} />
            {showLogout && (
        <button className="auth-button logout-button" onClick={handleLogout}>
          Logout
        </button>
      )}
        </div>
    );
}

export default Inbox;
