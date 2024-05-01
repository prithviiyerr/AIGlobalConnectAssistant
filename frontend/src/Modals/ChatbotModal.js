import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/ChatbotDialogue.css';



function ChatbotModal({ userId, setUserId, showLogout, setShowLogout, email, onClose, visible }) {

    const navigate = useNavigate();
    const API_KEY = "sk-proj-ZW5tKdt2qBFweMIZGKoyT3BlbkFJs3cLrXWZKG9Yqlmeq67F";
    // const [showLogoutButton, setShowLogoutButton] = useState(true);
    const messagesEndRef = useRef(null);
    const [typing, setTyping] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        if (email) {
            const emailSummary = `From: ${email.sender}, Subject: ${email.subject}, Body: ${email.body}`;
            const systemMessages = [
                {
                    role: 'system',
                    content: "Speak to me like a business professional with 5-10 years of experience",
                },
                {
                    role: 'system',
                    content: 'Email Summary: ' + emailSummary,
                }
            ];

            // Send initial message along with system messages
            processMessageToChatGPT([systemMessages]);
        }
    }, []);


    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };
    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && inputValue.trim()) {
            handleSend();
        }
    };
    const handleLogout = () => {
        setUserId(null);
        navigate('/');
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
        setInputValue('');
        await processMessageToChatGPT(newMessages);
    };

    async function processMessageToChatGPT(chatMessages) {
        // messages is an array of messages
        // Format messages for chatGPT API
        // API is expecting objects in format of { role: "user" or "assistant", "content": "message here"}
        // So we need to reformat

        const allMessages = [
            ...chatMessages.map(messageObject => ({
                role: messageObject.sender === 'ChatGPT' ? 'assistant' : 'user',
                content: messageObject.message
            }))
        ];

        const apiRequestBody = {
            model: 'gpt-3.5-turbo',
            messages: allMessages,
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

    if (!visible || !email) return null;

    return (
        <div className="email-detail-modal-overlay">
            <div className="email-detail-modal">
                <div className="email-detail-header">
                    <span className="email-detail-title text-success fw-bold">{email.subject}</span>
                    <button className="email-detail-close-button" onClick={onClose}>X</button>
                </div>
                <div className="email-detail-body">
                    <p><strong>From:</strong> {email.sender}</p>
                    <p><strong>Subject:</strong> {email.subject}</p>
                    <p>{email.body}</p>
                    <div style={{ borderTop: '1px solid gray', marginBottom: '8px' }}></div>
                    <div className="chatbot-dialogue">
                        <div className="messages-container">
                            {messages.map((message, index) => (
                                <div key={index} className={`message ${message.sender}`}>
                                    {message.message}
                                </div>
                            ))}
                            {typing && <div className="typing-indicator">Connector is typing...</div>}
                        </div>
                        <div className="input-group">
                            <input
                                type="text"
                                className="message-box"
                                placeholder="Message Connector..."
                                value={inputValue} // Controlled input must have a value prop
                                onChange={handleInputChange} // Updates state on input change
                                onKeyPress={handleKeyPress} // Handles sending message on Enter key press
                            />
                            <button className="btn" onClick={handleSend} style={{ backgroundColor: '#3b71ca' }}>Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChatbotModal;