import React from 'react';
import './CreateAccountModal.css'; // Create this CSS file for styling the modal

function CreateAccountModal({ onClose }) {
  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <button onClick={onClose} className="modal-close-button">&times;</button>
        <h2>Create Account</h2>
        {/* Form fields here */}
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
          <button type="submit">Create</button>
        </form>
      </div>
    </div>
  );
}

export default CreateAccountModal;

