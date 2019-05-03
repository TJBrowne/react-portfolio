import React, { Component } from "react";
import "./Sidebar.css";

class Sidebar extends Component {
  render() {
    return (
      <div className="sideNav">

      <div className="myPhoto">
        <img src="src/images/IMG_9395.jpg" alt="Tiffany Brown Pic" />
      </div>
      
      <div>
        <p>tbrown5254@gmail.com</p>
        <p>(347)946-5755</p>
      </div>
        <nav className="navbar">
          <div>
            {/* make these links */}
            <div class="grid-item">Introduction</div>
            <div class="grid-item">About</div>
            <div class="grid-item">Timeline</div>
            {/* <ul>
            <li><a href="intro">Introduction</a></li>
            <li><a href="about">About</a></li>
            <li><a href="projects">Timeline</a></li>
          </ul> */}
          </div>
        </nav>
        
        <nav id="links-menu">
          <div className="links">
            <div className="nav-links">
              <a href="https://twitter.com/Tiffany12904692">
                <img
                  title="Twitter"
                  alt="Twitter"
                  src="https://socialmediawidgets.files.wordpress.com/2014/03/01_twitter.png"
                  width="35"
                  height="35"
                />
              </a>
            </div>
            <div className="nav-links">
              <a href="https://linkedin.com/in/tjcbrown/">
                <img
                  title="LinkedIn"
                  alt="LinkedIn"
                  src="https://socialmediawidgets.files.wordpress.com/2014/03/07_linkedin.png"
                  width="35"
                  height="35"
                />
              </a>
            </div>
            <div className="nav-links">
              <a href="https://www.instagram.com/TBlu___/">
                <img
                  title="Instagram"
                  alt="RSS"
                  src="https://socialmediawidgets.files.wordpress.com/2014/03/10_instagram.png"
                  width="35"
                  height="35"
                />
              </a>
            </div>
          </div>
        </nav>
        <div className="footer">
          <p>
            Made with <i className="icon-heart" aria-hidden="true" /> and{" "}
            <i className="icon-beer" aria-hidden="true" />
            <br />
          </p>
        </div>
      </div>
    );
  }
}
export default Sidebar;
