import React from 'react';
import AddMessage from './AddMessage';
import CheckBox from './CheckBox';
import Button from './Button';
import { Card } from './Card';
import { Container, Col, Row } from './Grid';
import Title from './Title';

// $FlowFixMe
const SendMessage = props => (
  <form onSubmit={props.onSubmit}>
    <Card>
      <Container>
        <Row>
          <Title defaultTitle={props.defaultValues} onChange={props.onChange} />
        </Row>
        <Row>
          <Col>
            <AddMessage
              defaultMessage={props.defaultValues}
              onChange={props.onChange}
            />
          </Col>
          <Col med>
            <CheckBox
              defaultPrivacy={props.defaultValues}
              label="Private"
              onChange={props.onChange}
            />
          </Col>
          <Col med>
            <Button primary onChange={props.onChange}>
              Send
            </Button>
          </Col>
        </Row>
      </Container>
    </Card>
  </form>
);

/**@component */
export default SendMessage;
