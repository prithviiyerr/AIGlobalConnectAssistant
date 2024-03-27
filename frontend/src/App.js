import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Inbox from './Inbox';
import ChatbotDialogue from './ChatbotDialogue';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/inbox" element={<Inbox/>}/>
        <Route path="/chatbot" element={<ChatbotDialogue/>}/>
      </Routes>
    </Router>
  );
}

export default App;
