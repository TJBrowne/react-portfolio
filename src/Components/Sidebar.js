import React, { Component } from "react";
import "./Sidebar.scss";

class Sidebar extends Component {
  render() {
    return (
      <div className="sideNav">
        {/* <div className="myPhoto">
          <img src="https://i.imgur.com/GrA6Jj0.jpg" alt="Tiffany's Pic" />
        </div> */}

        <div className="contact">
          <p>tbrown5254@gmail.com</p>
          <p>(347)946-5755</p>
        </div>

        <nav id="links-menu">
          {/* <div className="links"> */}
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
          {/* </div> */}
        </nav>
        <div className="footer">
        </div>
      </div>
    );
  }
}
export default Sidebar;
