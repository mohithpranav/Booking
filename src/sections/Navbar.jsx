import { useState } from "react";
import { headerlogo, downarrow, logo } from "../assets/icons";
import { navLinks } from "../constants";
import "./navbar.css";

const Navbar = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <header className="navbar-container">
      <nav className="navbar">
        <a href="#">
          <img src={logo} alt="Logo" width={40} height={40} />
          <img src={headerlogo} alt="Logo" width={80} height={30} />
        </a>
        <ul className="navbar-items-container">
          {navLinks.map((item, index) => (
            <li key={item.label}>
              <a href={item.href} className="navbar-items">
                {item.label}
                {index === navLinks.length - 1 && (
                  <img
                    src={downarrow}
                    alt="Down Arrow"
                    className="down-arrow"
                    onClick={toggleDropdown}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>
        {isDropdownVisible && (
          <div className="dropdown">
            <div className="dropdown-item">
              <span>Doctor</span>
              <a href="#">Login</a>
              <a href="#">Sign up</a>
            </div>
            <hr className="dropdown-divider" />
            <div className="dropdown-item">
              <span>Patient</span>
              <a href="#">Login</a>
              <a href="#">Sign up</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
