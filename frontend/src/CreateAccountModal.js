import React from 'react';
import './CreateAccountModal.css'; // Custom CSS file for additional styling

function CreateAccountModal({ onClose }) {
  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <div className='container'>
          <button onClick={onClose} className="modal-close-button">&times;</button>
          <h2 className="modal-title mb-3 text-center">Create Account</h2>
          <form>
            <div className="row mb-3">
              <div className='col-1'></div>
              <div className='col-2'>
                <label className="form-label mt-3" htmlFor="name">Name</label>
              </div>
              <div className='col-8'>
                <input className="form-control" type="text" id="name" name="name" />
              </div>
            </div>
            <div className="row mb-3">
            <div className='col-1'></div>

              <div className='col-2'>
                <label className="form-label mt-3" htmlFor="email">Email</label>
              </div>
              <div className='col-8'>
                <input className="form-control" type="email" id="email" name="email" />
              </div>
            </div>
            <div className="row mb-3">
            <div className='col-1'></div>
              <div className='col-2'>
                <label className="form-label mt-3" htmlFor="password">Password</label>
              </div>
              <div className='col-8'>
                <input className="form-control" type="password" id="password" name="password" />
              </div>
            </div>
            <div className="row mb-3">
              <div className='col-3'></div>
              <button className="btn btn-primary col-6" type="submit">Create</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateAccountModal;
