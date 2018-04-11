import styled from 'styled-components';
import React from 'react';

const PublicPrivacy = styled.span.attrs({
  className: 'badge badge-primary'
})``;
const PrivatePrivacy = styled.span.attrs({
  className: 'badge badge-danger'
})``;

const Privacy = props => {
  const MyPrivacy = props.public ? PublicPrivacy : PrivatePrivacy;
  const message = props.public ? 'Public' : 'Private';
  return <MyPrivacy>{message}</MyPrivacy>;
};
/** @component */
export default Privacy;
