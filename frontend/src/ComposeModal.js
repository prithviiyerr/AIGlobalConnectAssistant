import React, { useState } from 'react';
import './ComposeModal.css';

function ComposeModal({ onClose, visible }) {
  const [email, setEmail] = useState({ to: '', subject: '', body: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmail({ ...email, [name]: value });
  };

  const handleComposeWithAI = () => {
    // Placeholder for AI composition logic
    console.log('AI Compose not implemented yet');
  };

  const handleSaveDraft = () => {
    // Placeholder for draft saving logic
    console.log('Draft saved:', email);
    localStorage.setItem('draftEmail', JSON.stringify(email)); // Saving to local storage
    onClose(); // Close the modal after saving the draft
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