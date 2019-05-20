import React, { Component } from "react";
import "./App.scss";
import Sidebar from "./Components/Sidebar";
import Introduction from "./Components/Introduction";
import About from "./Components/About";
import Projects from "./Components/Projects";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="page">
        <div className="container-wrap">  
          <Router>
            <div className="routes">
              <nav className="navbar">
                <Link className="link" to="/">Introduction</Link>
                <Link className="link" to="/about">About</Link>
                <Link className="link" to="/projects">Projects</Link>
              </nav>
              <Sidebar />
              <Route exact path="/" component={Introduction} />
              <Route exact path="/about" components={About} />
              <Route exact path="/projects" components={Projects} />
            </div>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
