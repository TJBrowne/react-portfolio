import React, { Component } from "react";
// import './App.css'

class Sidebar extends Component {
  render() {
    return (
      <div>
        <nav id="main-menu" role="navigation" className="navbar">
          <div id="navbar" className="collapse">
            <ul>
              <li className="active">
                <a href="intro">Introduction</a>
              </li>
              <li>
                <a href="about">About</a>
              </li>
              <li>
                <a href="projects">Timeline</a>
              </li>
            </ul>
          </div>
        </nav>
        <nav id="links-menu">
          <div id="navbartwo" className="links">
            <ul>
              <li>
              <a href="https://twitter.com/Tiffany12904692">
                <img
                  title="Twitter" alt="Twitter" src="https://socialmediawidgets.files.wordpress.com/2014/03/01_twitter.png" width="35" height="35"
                />
              </a>
              </li>
              <li>
              <a href="https://linkedin.com/in/tjcbrown/">
                <img
                  title="LinkedIn" alt="LinkedIn" src="https://socialmediawidgets.files.wordpress.com/2014/03/07_linkedin.png" width="35" height="35"
                />
              </a>
              </li>
              <li>
              <a href="https://www.instagram.com/TBlu___/">
                <img
                  title="Instagram" alt="RSS" src="https://socialmediawidgets.files.wordpress.com/2014/03/10_instagram.png" width="35" height="35"
                />
              </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="colorlib-footer">
              <p>
                  Made with <i className="icon-heart" aria-hidden="true" /> and <i className="icon-beer" aria-hidden="true"></i><br></br> 
              </p>
              
            </div>
      </div>
    );
  }
}
export default Sidebar;
