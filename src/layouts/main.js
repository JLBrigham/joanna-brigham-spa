import { Routes, Route } from "react-router-dom";
import Navbar from "../components/navbar/Navbar.js";
import About from "../components/about/About.js";
import Skills from "../components/skills/Skills.js";
import "./Main.css";

function Main() {
  return (
    <div className="main-container">
      <Navbar></Navbar>
      <div className="content">
        <div className="content-container">
          <Routes>
            <Route path="/" element={<About />} />

            <Route path="/skills" element={<Skills />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Main;
