import React, { useState } from 'react';
import Sidebar from './Sidebar';
import EmailTable from './EmailTable';
import EmailDetailModal from './EmailDetailModal';
import './Trash.css'; 

function Trash() {
    const [emailDetailVisible, setEmailDetailVisible] = useState(false);
    const [selectedEmail, setSelectedEmail] = useState(null);

    // Dummy data for trashed emails
    const trashedEmails = [
        { id: 1, subject: "Vacation Request Approved", body: "Your vacation request has been approved. Enjoy your time off!" },
        { id: 2, subject: "Your Order Confirmation", body: "Confirmation for your recent order. Thank you for shopping with us." },
        // ... more trashed emails ...
    ];

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


    return (
        <div className='container mt-5'>
            <Sidebar />
            <EmailTable data={trashedEmails} onEmailClick={openEmailDetailModal} />
            {selectedEmail && emailDetailVisible && (
                <EmailDetailModal
                    email={selectedEmail}
                    onClose={closeEmailDetailModal}
                    visible={emailDetailVisible}
                    onMoveToTrash={handlePermanentDelete} // You will need to define this function
                    deleteLabel="Permanently Delete" // Custom label for the delete button
                />
            )}
        </div>
    );
}

export default Trash;
