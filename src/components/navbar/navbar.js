import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <h1>Joanna Brigham</h1>
      <ul>
        <li>
          <NavLink exact to="/">
            about
          </NavLink>
        </li>
        <li>
          <NavLink to="/skills">skills</NavLink>
        </li>
        <li>
          <NavLink to="/projects">projects</NavLink>
        </li>
        <li>
          <NavLink to="/experience">experience</NavLink>
        </li>
        <li>
          <NavLink to="/blog">blog</NavLink>
        </li>
        <li>
          <NavLink to="/hobbies">hobbies</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
