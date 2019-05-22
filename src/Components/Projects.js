import React, { Component } from "react";
import "./Projects.scss";

class Projects extends Component {
  render() {
    return (
      <div>
        <h1>Projects</h1>
        <div className="recipe-game">
          <a className="project-link" href="https://pages.git.generalassemb.ly/TJBrown2/dish-name-game/"> 
            <div className="image"><img src="src/images/Project-1.png" alt="" ></img></div>
            Recipe Game
          </a>
        </div>
        <div className="med-cabinet">
          <a className="project-link" href="https://tiffanys-medicine-cabinet.herokuapp.com/">
          <div className="image"><img src="src/images/Project-2.png" alt="" ></img></div>
            Medicine Cabinet
          </a>
        </div>
        <div className="rogue-gallery">
          <a className="project-link" href="https://rogues-gallery.herokuapp.com/">
          <div className="image"><img src="src/images/Project-3.png" alt="" ></img></div>
            Rogue Gallery
          </a>
        </div>
        <div className="allergy-free">
          <a className="project-link" href="https://nyc-allergy-free-eats.herokuapp.com/">
          <div className="image"><img src="src/images/Project-4.png" alt="" ></img></div>
            Allergy Free Eats
          </a>
        </div>
      </div>
    );
  }
}
export default Projects;
