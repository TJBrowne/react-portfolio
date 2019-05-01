import React, { Component } from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import Introduction from "./Components/Introduction";
import About from "./Components/About";
import Projects from "./Components/Projects";

class App extends Component {
  render() {
    return (
      <div id="page">
        <div id="container-wrap">
          <Sidebar />
          <div id="main">
            <Introduction />
            <About />
            <Projects />
            {/* <Blog />
            <Timeline /> */}
            <div className="body-parallax">
              <div className="parallax-a">
                <div className="parallax-left">
                  <div className="parallax-item parallax-item--o parallax-item-left" />
                  <div className="parallax-item parallax-item--x parallax-item-left" />
                  <div className="parallax-item parallax-item--o parallax-item-left" />
                </div>
                <div className="parallax-mid-left">
                  <div className="parallax-item parallax-item--x" />
                  <div className="parallax-item parallax-item--o" />
                  <div className="parallax-item parallax-item--x" />
                </div>
                <div className="parallax-mid-right">
                  <div className="parallax-item parallax-item--o" />
                  <div className="parallax-item parallax-item--x" />
                  <div className="parallax-item parallax-item--o" />
                </div>
                <div className="parallax-right">
                  <div className="parallax-item parallax-item--x" />
                  <div className="parallax-item parallax-item--o" />
                  <div className="parallax-item parallax-item--x" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
