import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaInbox } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import { PiNotePencilBold } from "react-icons/pi";
import { MdDrafts } from "react-icons/md";
import { FaTrash } from "react-icons/fa";

function Sidebar({ onCompose }) {
  return (
    <div className="sidebar">
      <ul className="nav flex-column">
        <li className="nav-item">
          <button className="compose-btn" onClick={onCompose}>
            <PiNotePencilBold /> Compose
          </button>
        </li>
        <li className="nav-item">
          <NavLink to="/inbox" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            <FaInbox style={{width: '24px', marginRight: '8px'}}/> Inbox
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/sent" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            <IoMdSend style={{width: '24px', marginRight: '8px'}}/>
            Sent
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/drafts" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            <MdDrafts style={{width: '24px', marginRight: '8px'}}/> Drafts
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/trash" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            <FaTrash style={{width: '24px', marginRight: '8px'}}/> Trash
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
