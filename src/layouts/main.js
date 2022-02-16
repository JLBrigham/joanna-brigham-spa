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
            <Route
              path="/"
              element={
                <About
                  img={
                    "http://JLBrigham.github.io/joannabrigham/profile-photo.jpg"
                  }
                  name={"Joanna Brigham"}
                  intro={
                    "I'm a junior full-stack engineer with a passion for front-end development. I'm currently looking for my first role in tech and would love to hear from you. \n\n I recently decided to make a career change from the travel and tourism industry to software engineering. I trained at Makers Academy, an intensive 4 month bootcamp. My background has given me a diverse range of skills and learning to code has taught me, that with a growth mindset, I have all the skills needed to learn whatever I put my mind to. I'm excited by the opportunity the tech industry will give me to continue to develop and learn. \n\n I'm based in Chamonix in the French Alps and love to spend my free time getting outside and exploring the mountains around me."
                  }
                />
              }
            />

            <Route path="/skills" element={<Skills />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Main;
