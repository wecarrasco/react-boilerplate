// @flow
import type { BuildInformation } from '../../containers/App/types';
import React from 'react';
import { Well } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

const AppFooter = ({
  deploymentEnvironment,
  frontEndBuildNumber
}: BuildInformation) => (
  <Well>
    <p>
      <FormattedMessage
        {...messages.FrontEndInformation}
        values={{ deploymentEnvironment, frontEndBuildNumber }}
      />
    </p>
    <p>
      {' '}
      <FormattedMessage {...messages.BackendVersion} />{' '}
    </p>
  </Well>
);

export default AppFooter;
