import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  setInterval(updateTime, 1000);

  const now = new Date().toLocaleTimeString();

  const [time, setTime] = useState(now);

  function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }
  return (
    <div className="navbar">
      <h2 className="name-header">Joanna Brigham</h2>
      <ul className="navlink-list">
        <li className="navbar-item">
          <NavLink className="navbar-link" exact to="/">
            about
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink className="navbar-link" to="/skills">
            skills
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink className="navbar-link" to="/projects">
            projects
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink className="navbar-link" to="/experience">
            experience
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink className="navbar-link" to="/blog">
            blog
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink className="navbar-link" to="/hobbies">
            hobbies
          </NavLink>
        </li>
        <li className="navbar-item">{time}</li>
      </ul>
    </div>
  );
}

export default Navbar;
