// @flow

import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { PageHeader, Well, Jumbotron } from "react-bootstrap";

class App extends Component {
  render() {
    return (
      <div className="App">
        <PageHeader bsClass="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </PageHeader>
        <Jumbotron>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </Jumbotron>
        <Well>
          <p>
            Front-End Version {process.env.REACT_APP_DEPLOYMENT_ENV}{" "}
            {process.env.REACT_APP_BUILD_NUMBER}
          </p>
          <p>Back-End Version (get from the api) </p>
        </Well>
      </div>
    );
  }
}

export default App;
