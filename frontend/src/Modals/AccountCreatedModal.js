import React from 'react';
import '../css/AccountCreatedModal.css';

function AccountCreatedModal({ onClose }) {
  return (

    <div className="account-created-backdrop">
      <div className="account-created-content">
      <p3> <strong>Account created successfully! Please login. </strong></p3>
      <button onClick={onClose} className="account-created-button">&times;</button>
      </div>
    </div>
  );
}

export default AccountCreatedModal;