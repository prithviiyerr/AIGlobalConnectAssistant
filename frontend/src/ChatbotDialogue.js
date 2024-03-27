import React, { useState } from 'react';
import './ChatbotDialogue.css';
import Sidebar from './Sidebar';

function ChatbotDialogue() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputValue.trim() !== '') {
      const newMessage = {
        text: inputValue,
        sender: 'user'
      };
      setMessages([...messages, newMessage]);
      setInputValue('');
    }
  };

  return (
    <div className="chatbot-dialogue">
        <Sidebar/>
      <div className="chat-container">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {message.text}
          </div>
        ))}
      </div>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control message-box"
          placeholder="Type your message..."
          value={inputValue}
          onChange={handleInputChange}
        />
        <button className="btn btn-primary" onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
}

export default ChatbotDialogue;
