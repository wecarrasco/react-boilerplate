// @flow
import React from 'react';
import logo from '../../logo.svg';
import { PageHeader } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

import styled, { keyframes } from 'styled-components';

const AppLogoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }`;

const StyledPageHeader = styled(PageHeader)`
  background-color: #222;
  height: 200px;
  padding: 20px;
  color: white;
`;

const Logo = styled.img`
  animation: ${AppLogoSpin} infinite 20s linear;
  height: 80px;
`;

const AppHeader = () => (
  <StyledPageHeader>
    <Logo src={logo} alt="logo" />
    <FormattedMessage {...messages.Welcome} />
  </StyledPageHeader>
);

export default AppHeader;
