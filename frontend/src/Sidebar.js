// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import './Sidebar.css';

// function Sidebar({ onCompose }) {
//   return (
//     <div className="sidebar">
//       <ul className="nav flex-column">
//         <li className="nav-item">
//           <button className="nav-link" onClick={onCompose}>
//             Compose
//           </button>
//         </li>
//         <li className="nav-item">
//           <NavLink to="/chatbot" className="nav-link" activeClassName="active">
//             <i className="fas fa-robot mr-2"></i>Chatbot
//           </NavLink>
//         </li>
//         <li className="nav-item">
//           <NavLink to="/inbox" className="nav-link" activeClassName="active">
//             <i className="fas fa-inbox mr-2"></i>Inbox
//           </NavLink>
//         </li>
//         <li className="nav-item">
//           <NavLink to="/sent" className="nav-link" activeClassName="active">
//             <i className="fas fa-paper-plane mr-2"></i>Sent
//           </NavLink>
//         </li>
//         <li className="nav-item">
//           <NavLink to="/drafts" className="nav-link" activeClassName="active">
//             <i className="fas fa-file-alt mr-2"></i>Draft
//           </NavLink>
//         </li>
//         <li className="nav-item">
//           <NavLink to="/trash" className="nav-link" activeClassName="active">
//             <i className="fas fa-trash-alt mr-2"></i>Trash
//           </NavLink>
//         </li>
//       </ul>
//     </div>
//   );
// }

// export default Sidebar;

import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

function Sidebar({ onCompose }) {
  return (
    <div className="sidebar">
      <ul className="nav flex-column">
        <li className="nav-item">
          <button className="nav-link" onClick={onCompose}>
            Compose
          </button>
        </li>
        <li className="nav-item">
          <NavLink to="/chatbot" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            <i className="fas fa-robot mr-2"></i>Chatbot
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/inbox" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            <i className="fas fa-inbox mr-2"></i>Inbox
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/sent" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            <i className="fas fa-paper-plane mr-2"></i>Sent
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/drafts" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            <i className="fas fa-file-alt mr-2"></i>Draft
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/trash" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            <i className="fas fa-trash-alt mr-2"></i>Trash
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
