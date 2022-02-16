import React from "react";
import "./About.css";

function About(props) {
  return (
    <div id="about" className="about">
      <div className="about-contents">
        <img className="profile-pic" src={props.img} alt="avatar_img" />
        <p className="intro-para">{props.intro}</p>
      </div>
    </div>
  );
}

export default About;
