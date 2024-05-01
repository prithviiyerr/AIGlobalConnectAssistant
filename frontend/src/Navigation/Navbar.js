import { React, useState } from 'react';
import logo from '../images/earth.webp';
import { NavLink } from 'react-router-dom';
import { RxAvatar } from "react-icons/rx";
import { IoIosSettings } from "react-icons/io";
import { FaSearch } from "react-icons/fa";

function Navbar({ setSearchTerm }) {
    const [searchInput, setSearchInput] = useState('');

    const handleInputChange = (e) => {
        setSearchInput(e.target.value);
        setSearchTerm(searchInput);
    };

    const handleSearch = () => {
        setSearchTerm(searchInput);
    };

    return (
        <div className="navbar">
            <div className="logo">
                <NavLink to="/inbox" style={{ textDecoration: 'none', color: 'black' }}>
                    <img src={logo} alt="Logo" /> GlobalConnect
                </NavLink>
            </div>
            <div>
                <input type="text" placeholder="Search..." className='search-box' value={searchInput} onChange={handleInputChange} />
                <button className='search-icon' onClick={handleSearch}><FaSearch /></button>
            </div>
            <div>
                <NavLink to="/inbox" className='settings-icon'>
                    <IoIosSettings />
                </NavLink>
                <NavLink to="/inbox" className='settings-icon'>
                    <RxAvatar />
                </NavLink>
            </div>
        </div>
    );
}

export default Navbar;
