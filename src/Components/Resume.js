import React, { Component } from "react";
import { Redirect } from 'react-router-dom'
import "./Resume.scss";

class Resume extends Component {
  state = {
    redirect: false
  }
  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="https://resume.creddle.io/resume/4jjqqhhtuf3" />
    }
  }

    render() {
      return (
        <div>
          {this.renderRedirect()}
        <button onClick={this.setRedirect}>Resume</button>
        </div>
      );
    }
  }
  export default Resume;
  