import React from 'react';
import NavBar from './NavBar';
import MainContent from './MainContent';
import AuthButtons from './AuthButtons';
import './App.css'; // If you're using a separate CSS file for App component styles

function App() {
  return (
    <div className="App">
      <NavBar />
      <MainContent />
      <AuthButtons />
    </div>
  );
}

export default App;
