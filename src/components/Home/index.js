// @flow

import React from 'react';
import {Jumbotron} from 'react-bootstrap';
import styled from 'styled-components';

const AppIntro = styled.p`font-size: large;`;

const Home = () => (
  <Jumbotron>
    <AppIntro>
      To get started, edit <code>src/App.js</code> and save to reload.
    </AppIntro>
  </Jumbotron>
);

export default Home;
