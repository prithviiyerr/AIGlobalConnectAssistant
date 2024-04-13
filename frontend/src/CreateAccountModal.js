import React, { useState } from 'react';
import axios from 'axios';
import './CreateAccountModal.css'; // Custom CSS file for additional styling

function CreateAccountModal({ onClose, handleAccountCreated}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [invalidFieldsError, setInvalidFieldsError] = useState(false);
  const [preExistingUserError, setPreExistingUserError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      const response = await axios.post('http://localhost:5000/create', {
        name,
        email,
        password
      });
      console.log(response.data);
      setName('');
      setEmail('');
      setPassword('');
      setInvalidFieldsError(false);
      setPreExistingUserError(false);
      handleAccountCreated();
      
    } catch (error) {
      if (error.response.data.message === 'Email already registered') {
        setPreExistingUserError(true);
        setInvalidFieldsError(false);
      } else if (error.response.data.message === 'Missing one or many fields'){
        setInvalidFieldsError(true);
        setPreExistingUserError(false);
      } else {
        console.error(error);
      }
    }
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <div className='container'>
          <button onClick={onClose} className="modal-close-button">&times;</button>
          <h2 className="modal-title mb-3 text-center">Create Account</h2>
          <form onSubmit={handleSubmit}>
            <div className="row mb-3">
              <div className='col-1'></div>
              <div className='col-2'>
                <label className="form-label mt-3" htmlFor="name">Name</label>
              </div>
              <div className='col-8'>
                <input className="form-control" type="text" id="name" name="name" 
                  value={name} onChange={(e) => setName(e.target.value)}/>
              </div>
            </div>
            <div className="row mb-3">
            <div className='col-1'></div>

              <div className='col-2'>
                <label className="form-label mt-3" htmlFor="email">Email</label>
              </div>
              <div className='col-8'>
                <input className="form-control" type="email" id="email" name="email" 
                  value={email} onChange={(e) => setEmail(e.target.value)}/>
              </div>
            </div>
            <div className="row mb-3">
            <div className='col-1'></div>
              <div className='col-2'>
                <label className="form-label mt-3" htmlFor="password">Password</label>
              </div>
              <div className='col-8'>
                <input className="form-control" type="password" id="password" name="password" 
                  value={password} onChange={(e) => setPassword(e.target.value)}/>
              </div>
            </div>
            <div className="row mb-3">
              <div className='col-3'></div>
              <button className="btn btn-primary col-6" type="submit">Create</button>
            </div>
          </form>
          {submitted && invalidFieldsError &&
              <p className="error-message">Please enter your name, email, and password</p>}
          {submitted && preExistingUserError &&
              <p className="error-message"> Account already exists <br /> Please try again with a different email </p>}
        </div>
      </div>
    </div>
  );
}

export default CreateAccountModal;
