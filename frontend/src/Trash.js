import React, { useState } from 'react';
import Sidebar from './Sidebar';
import EmailTable from './EmailTable';
import ComposeModal from './ComposeModal';
import EmailDetailModal from './EmailDetailModal';
import { useNavigate } from 'react-router-dom';
import './Trash.css';

function Trash({ userId, setUserId, showLogout, setShowLogout }) {
    const navigate = useNavigate();
    const [composeModalVisible, setComposeModalVisible] = useState(false);
    const [emailDetailVisible, setEmailDetailVisible] = useState(false);
    const [selectedEmail, setSelectedEmail] = useState(null);

    // Dummy data for trashed emails
    const trashedEmails = [
        { id: 1, subject: "Vacation Request Approved", body: "Your vacation request has been approved. Enjoy your time off!" },
        { id: 2, subject: "Your Order Confirmation", body: "Confirmation for your recent order. Thank you for shopping with us." },
        // ... more trashed emails ...
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
        setSelectedEmail(null); // Clear the selected email
        setEmailDetailVisible(false);
    };

    const handlePermanentDelete = (emailToDelete) => {
        // Logic to permanently delete the email from your data
        console.log('Permanently deleting email:', emailToDelete);
        // Close the modal after deleting
        closeEmailDetailModal();
    };

    const handleRestore = (email) => {
        // Logic to restore the email from the trash
        console.log("Email restored:", email);
        // typically update the state here and remove the email from the trashedEmails
    };


    return (
        <div className='container mt-5'>
            <Sidebar />
            <Sidebar onCompose={openComposeModal} />
            <ComposeModal onClose={closeComposeModal} visible={composeModalVisible} />
            <EmailTable data={trashedEmails} onEmailClick={openEmailDetailModal} />
            {selectedEmail && emailDetailVisible && (
                <EmailDetailModal
                    email={selectedEmail}
                    onClose={closeEmailDetailModal}
                    visible={emailDetailVisible}
                    onMoveToTrash={handlePermanentDelete} // You will need to define this function
                    deleteLabel="Permanently Delete" // Custom label for the delete button
                    onRestore={handleRestore}
                    isTrashView={true}
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

export default Trash;
