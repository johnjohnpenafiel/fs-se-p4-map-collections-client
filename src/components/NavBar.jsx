import { NavLink } from "react-router-dom";
// import "../NavBar.css";

function NavBar({logout}) {
  return (
    <nav className="navbar">

      <NavLink to="/">
      User Dashboard
      </NavLink>
      <NavLink to="/about">
      About
      </NavLink>

      <button onClick={logout}>Logout</button>

    </nav>
  );
}

export default NavBar;

