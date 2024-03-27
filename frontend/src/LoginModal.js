import React from 'react';
import './CreateAccountModal.css'; // Custom CSS file for additional styling

function LoginModal({ onClose }) {
  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <button onClick={onClose} className="modal-close-button">&times;</button>
        <h2 className="modal-title mb-3 text-center">Login</h2>
        <form>
          <div className="row mb-3">
            <div className='col-2'></div>
            <label className="form-label col-2 mt-3" htmlFor="email">Email</label>
            <div className='col-6'>
              <input className="form-control" type="email" id="email" name="email" />
            </div>
          </div>
          <div className="row mb-3">
            <div className='col-2'></div>
            <label className="form-label mt-3 col-2" htmlFor="password">Password</label>
            <div className='col-6'>
              <input className="form-control" type="password" id="password" name="password" />
            </div>
          </div>
          <div className="row mb-3">
            <div className='col-3'></div>
            <button className="btn btn-primary col-6" type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginModal;
