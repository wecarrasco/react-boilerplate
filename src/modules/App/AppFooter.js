// @flow
import type {AppProps} from './types';
import React, {Component} from 'react';
import {Well} from 'react-bootstrap';

class AppFooter extends Component<AppProps> {
  render() {
    return (
      <Well>
        <p>
          Front-End Version {
            this.props.buildInformation.deploymentEnvironment
          }{' '}
          {this.props.buildInformation.frontEndBuldNumber}
        </p>
        <p>Back-End Version (get from the api) </p>
      </Well>
    );
  }
}

export default AppFooter;
