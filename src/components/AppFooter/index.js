// @flow
import type {BuildInformation} from '../../containers/App/types';
import React from 'react';
import {Well} from 'react-bootstrap';

const AppFooter = ({
  deploymentEnvironment,
  frontEndBuildNumber,
}: BuildInformation) =>
  <Well>
    <p>
      Front-End Version {deploymentEnvironment} {frontEndBuildNumber}
    </p>
    <p>Back-End Version (get from the api) </p>
  </Well>;

export default AppFooter;
