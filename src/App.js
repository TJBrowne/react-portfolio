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
    <Router>
      <div className="page">
        <div className="container-wrap">  
          
            <div className="routes">
              <nav className="navbar">
                <Link className="link" to="/">Home</Link>
                <Link className="link" to="/about">About</Link>
                <Link className="link" to="/projects">Projects</Link>
              </nav>
              <Sidebar />
              <div className="content">
              <Route exact path="/" component={Introduction} />
              <Route exact path="/about" component={About} />
              <Route exact path="/projects" component={Projects} />
              </div>
            </div>
          
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
