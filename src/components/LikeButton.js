import Button from './Button';
import React from 'react';
import styled from 'styled-components';

const Like = styled.span.attrs({
  className: 'fa fa-thumbs-o-up',
  'aria-hidden': 'true'
})``;
const Dislike = styled.span.attrs({
  className: 'fa fa-thumbs-o-down',
  'aria-hidden': 'true'
})``;
// $FlowFixMe
const LikeButton = props => {
  const LikeOrDislike = props.like ? Like : Dislike;
  return (
    <Button primary>
      <LikeOrDislike />
    </Button>
  );
};
/** @component */
export default LikeButton;
