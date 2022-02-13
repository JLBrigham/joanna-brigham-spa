import { NavLink } from "react-router-dom";
import React, { useState } from "react";

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
        <li>{time}</li>
      </ul>
    </div>
  );
}

export default Navbar;
