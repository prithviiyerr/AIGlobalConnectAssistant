import React from 'react';
import './EmailDetailModal.css';

function EmailDetailModal({ email, onClose, visible, onMoveToTrash }) {
  if (!visible || !email) return null; // Also make sure to check that email is not null

  const handleMoveToTrash = () => {
    // Placeholder for trash logic
    console.log('Email moved to trash:', email);
    onMoveToTrash(email); // This will be passed down from the parent component
    onClose(); // Close the modal after moving to trash
  };

  return (
    <div className="email-detail-modal-overlay">
      <div className="email-detail-modal">
        <div className="email-detail-header">
          <span className="email-detail-title">{email.subject}</span>
          <button className="email-detail-close-button" onClick={onClose}>X</button>
        </div>
        <div className="email-detail-body">
          <p><strong>From:</strong> {email.to}</p>
          <p><strong>Subject:</strong> {email.subject}</p>
          <p>{email.body}</p>
          <button className="move-to-trash" onClick={handleMoveToTrash}>Move to Trash</button>
        </div>
      </div>
    </div>
  );
}

export default EmailDetailModal;
