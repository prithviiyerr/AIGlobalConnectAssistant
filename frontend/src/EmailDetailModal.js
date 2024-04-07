import React from 'react';
import './EmailDetailModal.css';

function EmailDetailModal({ email, onClose, visible, onMoveToTrash, deleteLabel }) {
  if (!visible || !email) return null;

  const handleMoveToTrash = () => {
    if (onMoveToTrash) {
      onMoveToTrash(email);
    }
    onClose();
  };

  return (
    <div className="email-detail-modal-overlay">
      <div className="email-detail-modal">
        <div className="email-detail-header">
          <span className="email-detail-title">{email.subject}</span>
          <button className="email-detail-close-button" onClick={onClose}>X</button>
        </div>
        <div className="email-detail-body">
          <p><strong>From:</strong> {email.from}</p>
          <p><strong>Subject:</strong> {email.subject}</p>
          <p>{email.body}</p>
          <button className="delete-button" onClick={handleMoveToTrash}>
            {deleteLabel || 'Move to Trash'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default EmailDetailModal;
