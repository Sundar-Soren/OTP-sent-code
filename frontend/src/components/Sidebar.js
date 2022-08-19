import React, { useState } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import ContactInfo from "./ContactsList/ContactInfo/ContactInfo";
import ContactList from "./ContactsList/ContactList";
import SendMessage from "./ContactsList/SendMessage/SendMessage";
import SentMessages from "./SentMessages/SentMessages";
import "./sidebar.scss";
const Sidebar = () => {
  const { state } = useLocation();
  const [isActive, setIsActive] = useState(state?.isSentRoute ? 1 : 0);
  return (
    <div className="sidebar">
      <div className="sidebar_container">
        <ul className="sidebar_content_left">
          <li className="welcome">Hi, Welcome</li>
          <Link to="/" className="Link" onClick={() => setIsActive(0)}>
            <li style={isActive === 0 ? { backgroundColor: "#a6a6fbc3" } : {}}>
              Contact Lists
            </li>
          </Link>
          <Link
            to="/sent"
            className="Link"
            onClick={() => setIsActive(1)}
            state={{ isSentRoute: true }}
          >
            <li style={isActive === 1 ? { backgroundColor: "#a6a6fbc3" } : {}}>
              Sent Messages
            </li>
          </Link>
        </ul>
        <div className="sidebar_right">
          <div className="topbar">
            {isActive === 0 ? <h1>Contact Lists</h1> : <h1>Sent Messages</h1>}
          </div>
          <Routes>
            <Route path="/" element={<ContactList />} />
            <Route path="/sent" element={<SentMessages />} />
            <Route path="/detail/:id" element={<ContactInfo />} />
            <Route path="/send-message/:id" element={<SendMessage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
