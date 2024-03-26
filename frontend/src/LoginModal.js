import React from 'react';
import './CreateAccountModal.css'; // Create this CSS file for styling the modal

function LoginModal({ onClose }) {
  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <button onClick={onClose} className="modal-close-button">&times;</button>
        <h2>Login</h2>
        {/* Form fields here */}
        <form>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default LoginModal;

