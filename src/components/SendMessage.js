import React from 'react';
import AddMessage from './AddMessage';
import CheckBox from './CheckBox';
import Button from './Button';
import { Card } from './Card';
import { Container, Col, Row } from './Grid';

// $FlowFixMe
const SendMessage = props => (
  <Card>
    <Container>
      <Row>
        <Col>
          <AddMessage />
        </Col>
        <Col med>
          <CheckBox label="Private" />
        </Col>
        <Col med>
          <Button primary>Send</Button>
        </Col>
      </Row>
    </Container>
  </Card>
);

/**@component */
export default SendMessage;
