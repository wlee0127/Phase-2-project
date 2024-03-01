import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <NavLink
        to="/"
        /* add styling to Navlink */
        className="nav-link"
      >
        Home
      </NavLink>
      <NavLink
        to="/Stores"
        /* add styling to Navlink */
        className="nav-link"
      >
        Stores
      </NavLink>
    </nav>
    );
};

export default NavBar;
