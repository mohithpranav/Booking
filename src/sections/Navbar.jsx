import { headerlogo, downarrow, logo } from "../assets/icons";
import { navLinks } from "../constants";
import "./Navbar.css";

const Navbar = () => {
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
                  />
                )}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
