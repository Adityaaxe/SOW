import React from "react";
import "../assets/CSS/Sidebar.css";
import {
  FaFileInvoice, FaUsers, FaBuilding, FaBook, FaTags, FaCopy,
  FaExclamationCircle, FaGift, FaBoxes, FaUserFriends, FaCloudUploadAlt, FaSignOutAlt
} from "react-icons/fa";

const menuItems = [
  { label: "Invoices", icon: <FaFileInvoice />, active: false },
  { label: "Customers", icon: <FaUsers />, active: false },
  { label: "My Business", icon: <FaBuilding />, active: false },
  { label: "Invoice Journal", icon: <FaBook />, active: false },
  { label: "Price List", icon: <FaTags />, active: true },
  { label: "Multiple Invoicing", icon: <FaCopy />, active: false },
  { label: "Unpaid Invoices", icon: <FaExclamationCircle />, active: false },
  { label: "Offer", icon: <FaGift />, active: false },
  { label: "Inventory Control", icon: <FaBoxes />, active: false, disabled: true },
  { label: "Member Invoicing", icon: <FaUserFriends />, active: false, disabled: true },
  { label: "Import/Export", icon: <FaCloudUploadAlt />, active: false },
  { label: "Log out", icon: <FaSignOutAlt />, active: false }
];

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="menu-title">Menu</h2>
      <div className="menu-underline" />
      <ul className="menu-list">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={`menu-item ${item.active ? "active" : ""} ${item.disabled ? "disabled" : ""}`}
          >
            {item.active && <span className="green-dot" />}
            <span className="icon">{item.icon}</span>
            <span className="label">{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
