import React, { useState } from 'react';
import EmailTable from './EmailTable';
import ComposeModal from './Modals/ComposeModal';
import EmailDetailModal from './Modals/EmailDetailModal';
import { useNavigate } from 'react-router-dom';
import './css/Trash.css';
import NavigateApp from './Navigation/NavigateApp';

function Trash({ userId, setUserId, showLogout, setShowLogout }) {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [composeModalVisible, setComposeModalVisible] = useState(false);
    const [emailDetailVisible, setEmailDetailVisible] = useState(false);
    const [selectedEmail, setSelectedEmail] = useState(null);

    // Dummy data for trashed emails
    const trashedEmails = [
        { id: 1, sender: 'Luka Doncic', subject: "Vacation Request Approved", body: "Your vacation request has been approved. Enjoy your time off!" },
        { id: 2, sender: 'Lebron James', subject: "Your Order Confirmation", body: "Confirmation for your recent order. Thank you for shopping with us." },
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
            <NavigateApp onCompose={openComposeModal} setSearchTerm={setSearchTerm} />
            <div>
                <EmailTable data={trashedEmails} onEmailClick={openEmailDetailModal} searchTerm={searchTerm} />
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

export default Trash;
