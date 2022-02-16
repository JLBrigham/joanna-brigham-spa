import React from "react";

function About(props) {
  return (
    <div id="about" className="about">
      <div className="name-container">
        <h1 className="my-name">{props.name}</h1>
      </div>
      <div className="about-contents">
        <img className="profile-pic" src={props.img} alt="avatar_img" />
        <p className="intro-para">{props.intro}</p>
      </div>
    </div>
  );
}

export default About;
