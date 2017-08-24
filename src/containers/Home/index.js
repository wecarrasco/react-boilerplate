// @flow

import React, {Component} from 'react';
import {Jumbotron} from 'react-bootstrap';

export class Home extends Component<void> {
  render() {
    return (
      <Jumbotron>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </Jumbotron>
    );
  }
}

export default Home;
