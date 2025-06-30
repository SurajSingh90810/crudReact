import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // Import the CSS file

function Header() {
  return (
    <div className="header-container">
      <nav className="header-nav">
        <Link to={"/add"} className="header-link">
          Add Employee
        </Link>
      </nav>
    </div>
  );
}

export default Header;
