import styled from 'styled-components';
// import "bootstrap/dist/css/bootstrap.css";
const Button = styled.button.attrs({
  className: props => (props.primary ? 'btn btn-primary' : 'btn btn-dangers')
})``;
/** @component */
export default Button;
