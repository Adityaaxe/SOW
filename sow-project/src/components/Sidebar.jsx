import React from "react";
import "../assets/CSS/Sidebar.css";

const Sidebar = () => {
  const menuItems = [
    "Invoices", "Customers", "My Business", "Invoice Journal",
    "Price List", "Multiple Invoicing", "Unpaid Invoices", "Offer",
    "Inventory Control", "Member Invoicing", "Import/Export", "Log out"
  ];

  return (
    <div className="sidebar">
      <h2 className="menu-title">Menu</h2>
      <ul className="menu-list">
        {menuItems.map((item, index) => (
          <li key={index} className="menu-item">{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
