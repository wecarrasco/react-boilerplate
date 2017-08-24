// @flow
import type {AppProps} from '../../containers/App/types';
import React from 'react';
import {Well} from 'react-bootstrap';

const AppFooter = ({buildInformation}: AppProps) => {
  return (
    <Well>
      <p>
        Front-End Version {buildInformation.deploymentEnvironment}{' '}
        {buildInformation.frontEndBuldNumber}
      </p>
      <p>Back-End Version (get from the api) </p>
    </Well>
  );
};

export default AppFooter;
