// Sidebar.js
import React from "react";
import SidebarButton from "../components/SidebarButton"; // Import SidebarButton component
import "../styles/SidebarStyles.css"; // Import Sidebar styles
import { Link } from "react-router-dom";



function Sidebar() {
  const buttonData = [
    { label: "Home", to: "/" },
    { label: "Introduction", to: "/Video1" },
    { label: "Lesson 1", to: "/Lesson1" },
    { label: "Lesson 2",to: "/Lesson2" },
    { label: "Assignment 1", to: "/ass" },
    { label: "Lesson 3", to: "/Lesson3" },
    { label: "Lesson 4", to: "/Lesson4"},
    { label: "Lesson 5",to: "/Lesson5" },
    { label: "Assignment 2", to: "/ass2" },
    { label: "My Products", to: "/products" },
  ];

  // const handleButtonClick = (buttonNumber) => {
  //   // Handle button click based on the buttonNumber
  //   alert(`Button ${buttonNumber} clicked.`);
  // };

  return (
    <>
    <div className="sidebar">
      <h2>Sidebar</h2>
      <div className="sidebar-buttons">
        {buttonData.map((button, index) => (
          <Link key={index} to={button.to}>
            <SidebarButton label={button.label} />
          </Link>
        ))}
      </div>
    </div>
    </>
  );
}

export default Sidebar;
