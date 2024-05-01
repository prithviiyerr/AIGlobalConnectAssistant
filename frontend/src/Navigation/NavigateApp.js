import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import '../css/NavigateApp.css';

function NavigateApp({ onCompose, setSearchTerm }) {
    return (
        <div>
            <div >
                <Navbar setSearchTerm={setSearchTerm}/>
            </div>
            <div className="sidebar-container">
                <Sidebar onCompose={onCompose} />
            </div>
        </div>
    );
}

export default NavigateApp;