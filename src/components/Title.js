import React from 'react';
import styled from 'styled-components';
//import Button from './Button';

const InputGroup = styled.div.attrs({
  className: 'input-group mb-3'
})``;

const InputPrepend = styled.div.attrs({
  className: 'input-group-prepend'
})``;

const InputTitle = styled.span.attrs({
  className: 'input-group-text'
})``;

const InputText = styled.input.attrs({
  className: 'form-control',
  type: 'text',
  placeholder: 'Title',
  'aria-label': 'Title',
  'aria-describedby': 'basic-addon1',
  id: 'MessageTitle'
})``;

// $FlowFixMe
const Title = props => (
  <InputGroup>
    <InputPrepend>
      <InputTitle>Title</InputTitle>
    </InputPrepend>
    <InputText onChange={props.onChange} />
  </InputGroup>
);

/** @component */
export default Title;
