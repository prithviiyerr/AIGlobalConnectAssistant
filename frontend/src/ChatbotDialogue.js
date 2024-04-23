// import React, { useState } from 'react';
// import './ChatbotDialogue.css';
// import Sidebar from './Sidebar';
// import axios from 'axios'

// function ChatbotDialogue() {
//   const [messages, setMessages] = useState([]);
//   const [inputValue, setInputValue] = useState('');

//   const handleInputChange = (e) => {
//     setInputValue(e.target.value);
//   };

//   const handleSendMessage = async () => {
//     if (inputValue.trim() !== '') {
//       const userMessage = {
//         text: inputValue,
//         sender: 'user'
//         // Add any additional fields you need for the message
//       };
//       setMessages([...messages, userMessage]);
  
//       // Clear the input field
//       setInputValue('');
  
//       // Call the function that sends the input value to GPT and sets the response
//       // Here we are using the `await` keyword within an async function, so this is correct.
//       await sendInputToGPT(inputValue);
//     }
//   };

//   const sendInputToGPT = async (input) => {
//     const requestBody = {
//       model: "gpt-3.5-turbo",
//       messages: [
//         { role: "user", content: input }
//       // If needed, add previous messages here following the same structure
//       ]
//     };

//     try {
//       const response = await axios.post("https://api.openai.com/v1/chat/completions", requestBody, {
//         headers: {
//           'Authorization': 'Bearer sk-proj-bQul9yRVVtqwyn8p1oUhT3BlbkFJvG1lqa4jJwQAas8V0lSP',
//           'Content-Type': 'application/json',
//     },
//   });

//   const gptResponse = {
//     text: response.data.choices[0].text,
//     sender: 'gpt',
//   };
//   setMessages((prevMessages) => [...prevMessages, gptResponse]);
// } catch (error) {
//   console.error('Error sending message to GPT:', error);
// }  
//   };




//   return (
//     <div className="chatbot-dialogue">
//         <Sidebar/>
//       <div className="chat-container">
//         {messages.map((message, index) => (
//           <div key={index} className={`message ${message.sender}`}>
//             {message.text}
//           </div>
//         ))}
//       </div>
//       <div className="input-group mb-3">
//         <input
//           type="text"
//           className="form-control message-box"
//           placeholder="Type your message..."
//           value={inputValue}
//           onChange={handleInputChange}
//         />
//         <button className="btn btn-primary" onClick={handleSendMessage}>Send</button>
//       </div>
//     </div>
//   );
// }

// export default ChatbotDialogue;
 





// import React, { useState } from 'react';
// import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';
// import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
// import Sidebar from './Sidebar';

// const API_KEY = "sk-proj-bQul9yRVVtqwyn8p1oUhT3BlbkFJvG1lqa4jJwQAas8V0lSP"; 

// const systemMessage = { //  Explain things like you're talking to a software professional with 5 years of experience.
//   "role": "system", "content": "Explain things like you're talking to a software professional with 2 years of experience."
// }

// function ChatbotDialogue() {
//   const [messages, setMessages] = useState([
//     {
//       message: "Hello, I'm ChatGPT! Ask me anything!",
//       sentTime: "just now",
//       sender: "ChatGPT"
//     }
//   ]);
//   const [isTyping, setIsTyping] = useState(false);

//   const handleSend = async (message) => {
//     const newMessage = {
//       message,
//       direction: 'outgoing',
//       sender: "user"
//     };

//     const newMessages = [...messages, newMessage];
    
//     setMessages(newMessages);

//     // Initial system message to determine ChatGPT functionality
//     // How it responds, how it talks, etc.
//     setIsTyping(true);
//     await processMessageToChatGPT(newMessages);
//   };
  
//   async function processMessageToChatGPT(chatMessages) { // messages is an array of messages
//     // Format messages for chatGPT API
//     // API is expecting objects in format of { role: "user" or "assistant", "content": "message here"}
//     // So we need to reformat

//     let apiMessages = chatMessages.map((messageObject) => {
//       let role = "";
//       if (messageObject.sender === "ChatGPT") {
//         role = "assistant";
//       } else {
//         role = "user";
//       }
//       return { role: role, content: messageObject.message}
//     });


//     // Get the request body set up with the model we plan to use
//     // and the messages which we formatted above. We add a system message in the front to'
//     // determine how we want chatGPT to act. 
//     const apiRequestBody = {
//       "model": "gpt-3.5-turbo",
//       "messages": [
//         systemMessage,  // The system message DEFINES the logic of our chatGPT
//         ...apiMessages // The messages from our chat with ChatGPT
//       ]
//     }

//     await fetch("https://api.openai.com/v1/chat/completions", 
//     {
//       method: "POST",
//       headers: {
//         "Authorization": "Bearer " + API_KEY,
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(apiRequestBody)
//     }).then((data) => {
//       return data.json();
//     }).then((data) => {
//       console.log(data);
//       setMessages([...chatMessages, {
//         message: data.choices[0].message.content,
//         sender: "ChatGPT"
//       }]);
//       setIsTyping(false);
//     });
//   }

  

//   return (
//     <div className="chatbot-dialogue">
//       <Sidebar />
//       <div style={{ position:"relative", height: "800px", width: "700px"  }}>
//       <MainContainer>
//         <ChatContainer>
//           <MessageList
//             scrollBehavior="smooth" 
//                 typingIndicator={isTyping ? <TypingIndicator content="ChatGPT is typing" /> : null}
//               >
//                 {messages.map((message, i) => {
//                   console.log(message)
//                   return <Message key={i} model={message} />
//             })}
//           </MessageList>
//           <MessageInput placeholder="Type message here" onSend={handleSend} />
//         </ChatContainer>
//       </MainContainer>
//     </div>
//     </div>
    
//   );
// }

// export default ChatbotDialogue;
//TypingIndicator, MessageSeparator

// import React, { useState } from 'react';
// import { MainContainer, ChatContainer, MessageList, Message, MessageInput } from '@chatscope/chat-ui-kit-react';
// import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
// import Sidebar from './Sidebar';

// //const API_KEY = "sk-proj-bQul9yRVVtqwyn8p1oUhT3BlbkFJvG1lqa4jJwQAas8V0lSP"; 

// //const systemMessage = { //  Explain things like you're talking to a software professional with 5 years of experience.
//  // "role": "system", "content": "Explain things like you're talking to a software professional with 2 years of experience."
// //}

// function ChatbotDialogue() {
//   const [messages, setMessages] = useState([
//     {
//       message: "Hello, I'm ChatGPT! Ask me anything!",
//       //sentTime: "just now",
//       sender: "ChatGPT"
//     }
//   ])

//   const handleSend = async (message) => {
//     const newMessage = {
//       message: message,
//       sender: "user",
//       direction: "outgoing"
//     }

//     const newMessages = [...messages, newMessage];

//     setMessages(newMessages);
//   }

  


//   return (
//     <div className="chatbot-dialogue">
//       <Sidebar />
//       <div style={{position:"relative", height: "800px", width: "700px"}}>
//         <MainContainer>
//           <ChatContainer>
//             <MessageList>
//               {messages.map((message, i) => {
//                 return <Message key={i} model={message} />
//                })}
//             </MessageList>
//             <MessageInput placeholder='Type message here' onSend={handleSend}/>
//           </ChatContainer>
//         </MainContainer>
//       </div>
//     </div>

//   )
// }

// export default ChatbotDialogue;

import React, {useState} from 'react';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';
import Sidebar from './Sidebar';
import './ChatbotDialogue.css';

const systemMessage = {
    role: 'system',
    content: "Explain all concepts like I'm a junior/mid-level web developer",
  };

function ChatbotDialogue(){
    const API_KEY = "sk-proj-ZW5tKdt2qBFweMIZGKoyT3BlbkFJs3cLrXWZKG9Yqlmeq67F";
    const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      message: "Hello, I'm ChatGPT! Ask me anything!",
      sentTime: 'just now',
      sender: 'ChatGPT',
    },
  ]);

  const handleSend = async (message) => {
    const newMessage = {
      message,
      direction: 'outgoing',
      sender: 'user',
    };

    const newMessages = [...messages, newMessage];

    setMessages(newMessages);

    setTyping(true);

    await processMessageToChatGPT(newMessages);
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
            'OpenAI-Organization': 'org-mM4Ne4K067g7i0zMgp5WE5sm' ,
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
    <Sidebar/>
      <div style={{ position: 'relative', height: '800px', width: '700px' }}>
        <MainContainer>
          <ChatContainer>
            <MessageList
              scrollBehavior="smooth"
              typingIndicator={
                typing ? <TypingIndicator content="ChatGPT is typing" /> : null
              }
            >
              {messages.map((message, i) => {
                return <Message key={i} model={message} />;
              })}
            </MessageList>
            <MessageInput placeholder="Type message here" onSend={handleSend} />
          </ChatContainer>
        </MainContainer>
      </div>
    </div>
  );
}


export default ChatbotDialogue;
