// @flow
import React from 'react';
import logo from '../../logo.svg';
import {PageHeader} from 'react-bootstrap';

const AppHeader = () => {
  return (
    <PageHeader bsClass="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      Welcome to React
    </PageHeader>
  );
};

export default AppHeader;
