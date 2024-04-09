import React, { useState } from 'react';
import './ChatbotDialogue.css';
import Sidebar from './Sidebar';
import ComposeModal from './ComposeModal';

function ChatbotDialogue() {
  const [composeModalVisible, setComposeModalVisible] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const openComposeModal = () => setComposeModalVisible(true);
  const closeComposeModal = () => setComposeModalVisible(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSendMessage = (text = inputValue) => {
    if (text.trim() !== '') {
      const newMessage = {
        text: text,
        sender: 'user'
      };
      setMessages([...messages, newMessage]);
      setInputValue('');
    }
  };

  const quickReplies = [
    { text: 'Help me compose an email' },
    { text: 'Help me compose an email response' },
    { text: 'Help me understand an email (tone-sensitive)' }
  ];

  return (
    <div className="chatbot-dialogue">
      <Sidebar />
      <Sidebar onCompose={openComposeModal} />
      <ComposeModal onClose={closeComposeModal} visible={composeModalVisible} />
      <div className="chat-container">
        <div className="chat-header">
          Hi, how can I help you?
        </div>
        <div className="messages-container">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.sender}`}>
              {message.text}
            </div>
          ))}
        </div>
        <div className="quick-reply-container">
          {quickReplies.map((reply, index) => (
            <button key={index} className="quick-reply" onClick={() => handleSendMessage(reply.text)}>
              {reply.text}
            </button>
          ))}
        </div>
      </div>
      <div className="input-group chat-input-group">
        <input
          type="text"
          className="form-control message-input"
          placeholder="Message the Chatbot..."
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={event => {
            if (event.key === 'Enter') {
              handleSendMessage();
            }
          }}
        />
        <button className="btn send-button" onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
}

export default ChatbotDialogue;
