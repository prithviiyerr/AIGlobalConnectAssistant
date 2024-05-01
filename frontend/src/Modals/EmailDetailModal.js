import { React, useState } from 'react';
import '../css/EmailDetailModal.css';
import ChatbotModal from './ChatbotModal';
import { FaTrash } from "react-icons/fa";


function EmailDetailModal({ email, onClose, visible, onMoveToTrash, deleteLabel, onRestore, isTrashView }) {

  const [chatbotVisible, setChatbotVisible] = useState(false);

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

  const openChatbotModal = (email) => {
    setChatbotVisible(true);
  };
  const closeChatbotModal = (email) => {
    setChatbotVisible(false);
  };

  return (
    <div className="email-detail-modal-overlay">
      <div className="email-detail-modal">
        <div className="email-detail-header" style={{ borderBottom: '1px solid gray' }}>
          <span className="email-detail-title text-success fw-bold">{email.subject}</span>
          <button className="email-detail-close-button" onClick={onClose}>X</button>
        </div>
        <div className="email-detail-body">
          <p><strong>From:</strong> {email.sender}</p>
          <p><strong>Subject:</strong> {email.subject}</p>
          <p>{email.body}</p>
          <div style={{ borderTop: '1px solid gray' }}></div>
          <button className='action-button' onClick={openChatbotModal} style={{ backgroundColor: '#3b71ca', marginRight: '12px' }}>
            ConnectBot
          </button>
          {chatbotVisible && (
            <ChatbotModal
              email={email}
              onClose={closeChatbotModal}
              visible={chatbotVisible}
            />
          )}
          {/* Conditionally render the delete button based on the context */}
          {isTrashView ? (
            <button className="action-button delete-button" onClick={handleMoveToTrash}>
              {deleteLabel || 'Permanently Delete'}
            </button>
          ) : (
            <button style={{ border: 'none', background: 'none' }} onClick={{ handleMoveToTrash }}>
              <FaTrash style={{ color: 'gray' }} />
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
