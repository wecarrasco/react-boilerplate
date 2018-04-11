import styled from 'styled-components';
import React from 'react';
import StatusMessageBar from './StatusMessageBar';
const Card = styled.div.attrs({
  className: 'card'
})``;

const CardBody = styled.div.attrs({
  className: 'card-body'
})``;

const CardTitle = styled.h5.attrs({
  className: 'card-title'
})``;

const CardText = styled.p.attrs({
  className: 'card-text'
})``;
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
