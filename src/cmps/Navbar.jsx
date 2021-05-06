import { NavLink } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import { useState } from "react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="main-navbar">
      <h2 className="logo">GuyAmsalem</h2>
      <ul className={isMenuOpen ? "router-links open" : "router-links"}>
        <li>
          <NavLink activeClassName="active" exact to="/">
            Home Page
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/main-app">
            Main App
          </NavLink>
        </li>
      </ul>
      <MenuIcon
        className="menu-btn"
        onClick={() => {
          setIsMenuOpen((prevState) => !prevState);
        }}
      />
    </nav>
  );
}
