import { NavLink } from "react-router-dom";


function NavBar() {
  return (
    <nav className="navbar">
    <NavLink to="/profile/:id">
      Profile
    </NavLink>
    
    </nav>
    );
};

export default NavBar;

