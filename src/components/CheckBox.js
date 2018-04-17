import styled from 'styled-components';
import React from 'react';

const CustomCheckBox = styled.div.attrs({
  className: 'custom-control custom-checkbox'
})``;

const CustomInput = styled.input.attrs({
  className: 'custom-control-input',
  type: 'checkbox',
  id: 'MessagePrivacy'
})``;

const CustomLabel = styled.label.attrs({
  className: 'custom-control-label',
  htmlFor: 'MessagePrivacy'
})``;
// $FlowFixMe
const CheckBox = props => (
  <CustomCheckBox onChange={props.onChange}>
    <CustomInput />
    <CustomLabel>{props.label}</CustomLabel>
  </CustomCheckBox>
);

/** @component */
export default CheckBox;
