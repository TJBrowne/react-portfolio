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
          </div>
        </div>
      </div>
    );
  }
}

export default App;
