import React from 'react';
import StatusMessageBar from './StatusMessageBar';
import { Card, CardBody, CardTitle, CardText } from './Card';

// $FlowFixMe
const Mensaje = props => (
  <Card>
    <CardBody>
      <CardTitle>{props.title}</CardTitle>
      <CardText>{props.mensaje}</CardText>
      <StatusMessageBar {...props} />
    </CardBody>
  </Card>
);

/** @component */
export default Mensaje;
