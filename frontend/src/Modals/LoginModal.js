import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../css/CreateAccountModal.css'; // Custom CSS file for additional styling
import { Link } from 'react-router-dom';


function LoginModal({ userId, setUserId, onClose }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [invalidFieldsError, setInvalidFieldsError] = useState(false);
  const [nonExistingUserError, setNonExistingUserError] = useState(false);
  const [incorrectPasswordError, setIncorrectPasswordError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      const response = await axios.post('http://localhost:5000/login', {
        email,
        password
      });
      console.log(response.data.message);
      const user_id = response.data.user_id ? String(response.data.user_id) : null;
      setUserId(user_id);
      setEmail('');
      setPassword('');
      navigate('/inbox');
    } catch (error) {
      console.error(error);
      if (error.response.data.message === 'Invalid username/password') {
        setNonExistingUserError(true);
        setInvalidFieldsError(false);
      } else if (error.response.data.message === 'Incorrect password') {
        setIncorrectPasswordError(true);
      } else if (error.response.data.message === 'Missing one or many fields') {
        setInvalidFieldsError(true);
        setNonExistingUserError(false);
      } else {
        console.error(error);
      }
    }
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <button onClick={onClose} className="modal-close-button">&times;</button>
        <h2 className="modal-title mb-3 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="row mb-3">
            <div className='col-2'></div>
            <label className="form-label col-2 mt-3" htmlFor="email">Email</label>
            <div className='col-6'>
              <input className="form-control" type="email" id="email" name="email"
                value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
          </div>
          <div className="row mb-3">
            <div className='col-2'></div>
            <label className="form-label mt-3 col-2" htmlFor="password">Password</label>
            <div className='col-6'>
              <input className="form-control" type="password" id="password" name="password"
                value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
          </div>
          <div className="row mb-3">
            <div className='col-3'></div>
            <Link to='/inbox'>
              <button className="btn btn-primary col-6" style={{ backgroundColor: '#3b71ca' }}>Login</button>
            </Link>

          </div>
        </form>
        {submitted && invalidFieldsError &&
          <p className="error-message">Please enter your email and password</p>}
        {submitted && nonExistingUserError &&
          <p className="error-message"> Account does not exist <br /> Please try again. </p>}
        {submitted && incorrectPasswordError &&
          <p className="error-message"> Incorrect password <br /> Please try again. </p>}

      </div>
    </div>
  );
}

export default LoginModal;