import React,{ useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Home from './Home';
import Inbox from './Inbox';
import Trash from './Trash';
import ChatbotDialogue from './ChatbotDialogue';
import Sent from './Sent';
import Drafts from './Drafts';
import AuthButtons from './AuthButtons';

function App() {
  const [userId, setUserId] = useState(null);
  const [showLogout, setShowLogout] = useState(true);


  useEffect(() => {
    console.log('User ID:', userId);
  }, [userId]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home userId={userId} 
        setUserId={setUserId}/>} />
        <Route path="/inbox" element={<Inbox userId={userId} 
        setUserId={setUserId} showLogout={showLogout} 
        setShowLogout={setShowLogout}/>} />
        <Route path="/trash" element={<Trash userId={userId} 
        setUserId={setUserId} showLogout={showLogout} 
        setShowLogout={setShowLogout}/>} />
        <Route path="/chatbot" element={<ChatbotDialogue userId={userId} 
        setUserId={setUserId} showLogout={showLogout} 
        setShowLogout={setShowLogout} />} />
        <Route path="/sent" element={<Sent userId={userId} 
        setUserId={setUserId} showLogout={showLogout} 
        setShowLogout={setShowLogout}/>} />
        <Route path="/drafts" element={<Drafts userId={userId} 
        setUserId={setUserId} showLogout={showLogout} 
        setShowLogout={setShowLogout}/>} />
      </Routes>
    </Router>
  );
}

export default App;
