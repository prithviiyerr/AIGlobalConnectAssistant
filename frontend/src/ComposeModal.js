import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './ComposeModal.css';

function ComposeModal({ userId, setUserId, onClose, visible }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState({ to: '', subject: '', body: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmail({ ...email, [name]: value });
  };

  const handleComposeWithAI = () => {
    navigate('/chatbot');
  };

  const handleSaveDraft = async () => {
    try {
      const response = await axios.post('http://localhost:5000/new-email-draft', {
        user_id: userId,
        email,
      });
    console.log(response.data.message);
    console.log('Draft saved:', email);
    localStorage.setItem('draftEmail', JSON.stringify(email)); // Saving to local storage
    setEmail({ to: '', subject: '', body: '' });
    onClose(); // Close the modal after saving the draft
  } catch (error) {
    console.error('Error saving draft:', error);
    console.error(error.response.data.message);
  }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for email sending logic
    console.log('Email sent:', email);
    onClose(); // Close the modal after sending the email
  };

  if (!visible) return null;

  return (
    <div className="compose-modal-overlay">
      <div className="compose-modal">
        <div className="compose-header">
          <span className="compose-title">Compose an Email</span>
          <button className="compose-close-button" onClick={onClose}>X</button>
        </div>
        <form className="compose-form" onSubmit={handleSubmit}>
          <input
            type="email"
            name="to"
            value={email.to}
            onChange={handleChange}
            placeholder="To"
          />
          <input
            type="text"
            name="subject"
            value={email.subject}
            onChange={handleChange}
            placeholder="Subject"
          />
          <textarea
            name="body"
            value={email.body}
            onChange={handleChange}
            placeholder="Body"
            rows="4"
          />
          <div className="compose-actions">
            <button type="button" onClick={handleComposeWithAI}>
              Compose with AI Chatbot
            </button>
            <button type="button" onClick={handleSaveDraft}>
              Save as Draft
            </button>
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ComposeModal;
