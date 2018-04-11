// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import Mensaje from '../Mensaje';
type Props = {
  Messages: any
};
class Home extends Component<Props> {
  render() {
    const mensajes = this.props.Messages.map(x => <Mensaje />);
    return null;
  }
}

export default Home;
