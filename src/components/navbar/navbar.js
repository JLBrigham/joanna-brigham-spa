import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <h1>Joanna Brigham</h1>
      <ul>
        <li>
          <Link exact to="/">
            about
          </Link>
        </li>
        <li>
          <Link to="/skills">skills</Link>
        </li>
        <li>
          <Link to="/projects">projects</Link>
        </li>
        <li>
          <Link to="/experience">experience</Link>
        </li>
        <li>
          <Link to="/blog">blog</Link>
        </li>
        <li>
          <Link to="/hobbies">hobbies</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
