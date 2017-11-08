// @flow

import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

const AppIntro = styled.p`font-size: large;`;

const Home = () => (
  <Jumbotron>
    <AppIntro>
      <FormattedMessage {...messages.GetStarted} values={{ file: <code>src/App.js</code> }} />
    </AppIntro>
  </Jumbotron>
);

export default Home;
