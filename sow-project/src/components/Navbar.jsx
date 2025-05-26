import React from "react";
import "../assets/CSS/Navbar.css";

const flags = {
    English: "https://flagcdn.com/w40/gb.png",
    Svenska: "https://flagcdn.com/w40/se.png",
};

const Navbar = ({ options = [], language, onLanguageChange }) => {
    return (
        <nav className="navbar">
            <img
                src="https://storage.123fakturera.se/public/icons/diamond.png"
                alt="Logo"
                className="navbar-logo"
            />
            <ul className="nav-links">
                {options.map((opt, index) => (
                    <li key={index}>{opt}</li>
                ))}
                <li className="language">
                    <select
                        value={language}
                        onChange={(e) => onLanguageChange(e.target.value)}
                        className="language-dropdown"
                    >
                        <option value="English">English</option>
                        <option value="Svenska">Svenska</option>
                    </select>
                    <img src={flags[language]} alt={`${language} flag`} width={24} />
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;