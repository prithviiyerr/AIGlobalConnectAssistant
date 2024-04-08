import React from 'react';
import './EmailDetailModal.css';

function EmailDetailModal({
  email,
  onClose,
  visible,
  onMoveToTrash,
  deleteLabel,
  onRestore,
  isTrashView
}) {
  if (!visible || !email) return null;

  const handleMoveToTrash = () => {
    if (onMoveToTrash) {
      onMoveToTrash(email);
    }
    onClose();
  };

  // Adding a new function for the Restore action
  const handleRestore = () => {
    if (onRestore) {
      onRestore(email);
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
          {/* Conditionally render the delete button based on the context */}
          {isTrashView ? (
            <button className="action-button delete-button" onClick={handleMoveToTrash}>
              {deleteLabel || 'Permanently Delete'}
            </button>
          ) : (
            <button className="action-button delete-button" onClick={handleMoveToTrash}>
              {deleteLabel || 'Move to Trash'}
            </button>
          )}
          {/* Conditionally render the Restore button if it's the trash view */}
          {isTrashView && (
            <button className="action-button restore-button" onClick={handleRestore}>
              Restore
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default EmailDetailModal;
