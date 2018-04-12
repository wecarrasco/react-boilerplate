import LikeButton from './LikeButton';
import Privacy from './Privacy';
import React from 'react';
import { Container, Col, Row } from './Grid';

// const LargeCol = Col.extend.attrs({ ClassName: 'col' })``;

// const MedCol = Col.extend.attrs({ ClassName: 'col-md-auto' })``;

// const SmallCol1 = Col.extend.attrs({ ClassName: 'col col-lg-2' })``;

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
