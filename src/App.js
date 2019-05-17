import React, { Component } from "react";
// import "./App.css";
import "./App.scss";
import Sidebar from "./Components/Sidebar";
import Introduction from "./Components/Introduction";
import About from "./Components/About";
import Projects from "./Components/Projects";

class App extends Component {
  render() {
    return (
      <div className="page">
        <div className="container-wrap">
          <Sidebar />
          <div className="main">
            <Introduction />
            <About />
            <Projects />           
          </div>
        </div>
      </div>
    );
  }
}

export default App;


