// @flow
import React, {Component} from 'react';
import logo from '../../logo.svg';
import {PageHeader} from 'react-bootstrap';

type Props = {};

class AppHeader extends Component<Props> {
  render() {
    return (
      <PageHeader bsClass="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Welcome to React
      </PageHeader>
    );
  }
}

export default AppHeader;
