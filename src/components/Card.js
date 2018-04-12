import styled from 'styled-components';

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

export { Card, CardBody, CardTitle, CardText };
