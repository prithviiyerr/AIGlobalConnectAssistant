import React, { useState, useEffect, useRef } from 'react';
import Sidebar from './Sidebar';
import ComposeModal from './ComposeModal';
import './ChatbotDialogue.css';

const systemMessage = {
  role: 'system',
  content: "Explain all concepts like I'm a junior/mid-level web developer",
};

function ChatbotDialogue() {
  const API_KEY = "sk-proj-ZW5tKdt2qBFweMIZGKoyT3BlbkFJs3cLrXWZKG9Yqlmeq67F";
  const messagesEndRef = useRef(null);
  const [typing, setTyping] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [composeModalVisible, setComposeModalVisible] = useState(false);
  const openComposeModal = () => setComposeModalVisible(true);
  const closeComposeModal = () => setComposeModalVisible(false);
  const [messages, setMessages] = useState([
    {
      message: "Hello, I'm ChatGPT! Ask me anything!",
      sentTime: 'just now',
      sender: 'ChatGPT',
    },
  ]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && inputValue.trim()) {
      handleSend();
    }
  };


  const handleSend = async (message) => {
    if (!inputValue.trim()) return; // Prevent sending empty messages

    const newMessage = {
      message: inputValue,
      direction: 'outgoing',
      sender: 'user',
    };

    const newMessages = [...messages, newMessage];

    setMessages(newMessages);

    setTyping(true);

    await processMessageToChatGPT(newMessages);
    setInputValue('');
  };

  async function processMessageToChatGPT(chatMessages) {
    // messages is an array of messages
    // Format messages for chatGPT API
    // API is expecting objects in format of { role: "user" or "assistant", "content": "message here"}
    // So we need to reformat

    let apiMessages = chatMessages.map((messageObject) => {
      let role = '';
      if (messageObject.sender === 'ChatGPT') {
        role = 'assistant';
      } else {
        role = 'user';
      }
      return { role: role, content: messageObject.message };
    });

    // Get the request body set up with the model we plan to use
    // and the messages which we formatted above. We add a system message in the front to'
    // determine how we want chatGPT to act.
    const apiRequestBody = {
      model: 'gpt-3.5-turbo',
      messages: [
        systemMessage, // The system message DEFINES the logic of our chatGPT
        ...apiMessages, // The messages from our chat with ChatGPT
      ],
    };

    try {
      const response = await fetch(
        'https://api.openai.com/v1/chat/completions',
        {
          method: 'POST',
          headers: {
            'Authorization': 'Bearer ' + API_KEY,
            'OpenAI-Organization': 'org-mM4Ne4K067g7i0zMgp5WE5sm',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(apiRequestBody),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to fetch data from the ChatGPT API');
      }

      const data = await response.json();
      console.log(data);
      setMessages([
        ...chatMessages,
        {
          message: data.choices[0].message.content,
          sender: 'ChatGPT',
        },
      ]);
      setTyping(false);
    } catch (error) {
      console.error(error);
      setTyping(false);
    }
  }

  return (
    <div className="chatbot-dialogue">
      <Sidebar onCompose={openComposeModal} />
      <div className="messages-container">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {message.message}
          </div>
        ))}
        {typing && <div className="typing-indicator">ChatGPT is typing...</div>}
      </div>
      <div className="input-group">
        <input
          type="text"
          className="message-box"
          placeholder="Message the Chatbot..."
          value={inputValue} // Controlled input must have a value prop
          onChange={handleInputChange} // Updates state on input change
          onKeyPress={handleKeyPress} // Handles sending message on Enter key press

        />
        <button className="btn" onClick={handleSend}>Send</button>
      </div>
      <ComposeModal onClose={closeComposeModal} visible={composeModalVisible} />
    </div>
  );
}


export default ChatbotDialogue;
