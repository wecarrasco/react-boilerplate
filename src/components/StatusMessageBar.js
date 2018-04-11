import styled from 'styled-components';
import LikeButton from './LikeButton';
import Privacy from './Privacy';
import React from 'react';

const Container = styled.div.attrs({
  className: 'container'
})``;

const Row = styled.div.attrs({
  className: 'row'
})``;
const Col = styled.div.attrs({
  className: 'col-sm'
})``;
// $FlowFixMe
const StatusMessageBar = props => (
  <Container>
    <Row>
      <Col>
        <LikeButton like />
      </Col>
      <Col>
        <LikeButton />
      </Col>
      <Col>
        <Privacy {...props} />
      </Col>
    </Row>
  </Container>
);
/** @component */
export default StatusMessageBar;
