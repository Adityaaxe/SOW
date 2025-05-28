import React from "react";
import "../assets/CSS/Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="user-info">
        <img src="/avatar.png" alt="avatar" className="avatar" />
        <div>
          <p className="user-name">John Andre</p>
          <p className="company-name">Storfjord AS</p>
        </div>
      </div>
      <div className="language-section">
        <span>Norsk Bokmål</span>
        <img src="/flag.png" alt="flag" className="flag" />
      </div>
    </div>
  );
};

export default Header;