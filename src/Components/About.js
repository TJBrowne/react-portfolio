import React, { Component } from "react";
import "./About.scss";

class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="aboutMe-para">
          <h1>About Me</h1>
          <p>
            A software developer skilled in the front and back-End, using
            JavaScript, HTML, CSS, React, SQL with experience using Ruby, Ruby
            on Rails and Express/Node.js. Client focused with a background in
            administrative roles possessing organizational skills, and a strong
            attention to detail. I look forward to combining my client services
            background with my work as a web developer to create efficient tools
            and experiences for my clients.
          </p>
        </div>
        <div className="about-links">
          <h5>Check Me Out</h5>
          <a href="https://resume.creddle.io/resume/4jjqqhhtuf3">Resume</a>
          <a href="https://linkedin.com/in/tjcbrown/">LinkedIn</a>
        </div>
      </div>
    );
  }
}
export default About;
