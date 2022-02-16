import React from "react";
import Project from "./Project";
import "./Projects.css";

function Projects() {
  return (
    <div className="projects" id="projects">
      <div className="projects-container">
        <Project
          href={"https://github.com/JLBrigham/chitter-challenge"}
          img={"http://jlbrigham.github.io/joannabrigham/chitter.png"}
          title={"Chitter"}
          description={
            "A Twitter clone, full-stack, CRUD web app built with Ruby, Sinatra, PostgreSQL and RSpec and Capybara for testing. This was a solo project and an early example of me developing my CSS skills."
          }
        />
        <Project
          href={"https://github.com/JLBrigham/Grappitude"}
          img={"http://jlbrigham.github.io/joannabrigham/grappitude.png"}
          title={"Grappitude"}
          description={
            "A React Native (MERN) mobile app to encourage users to keep a positive mindset. My final group project at Makers, I focussed on the front-end and the building of the user progress bar."
          }
        />
        <Project
          href={"https://github.com/JLBrigham/notes"}
          img={"http://jlbrigham.github.io/joannabrigham/notes.jpeg"}
          title={"Note Taker"}
          description={
            "A front-end, JavaScript-only web app for keeping notes. A group project where we also built a custom testing framework"
          }
        />
      </div>
    </div>
  );
}

export default Projects;
