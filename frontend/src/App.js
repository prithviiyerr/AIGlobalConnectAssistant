import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Inbox from './Inbox';
import Trash from './Trash';
import ChatbotDialogue from './ChatbotDialogue';
import Sent from './Sent';
import Drafts from './Drafts';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inbox" element={<Inbox />} />
        <Route path="/trash" element={<Trash />} />
        <Route path="/chatbot" element={<ChatbotDialogue />} />
        <Route path="/sent" element={<Sent />} />
        <Route path="/drafts" element={<Drafts />} />
      </Routes>
    </Router>
  );
}

export default App;
