import styled from 'styled-components';

const Container = styled.div.attrs({
  className: 'container'
})``;

const Row = styled.div.attrs({
  className: 'row'
})``;
const Col = styled.div.attrs({
  className: props => (props.med ? 'col-2' : 'col')
})``;

export { Container, Row, Col };
