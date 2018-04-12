import React, { Component } from 'react';
import ListOfMessages from '../../components/ListOfMessages';
class Home extends Component<any> {
  mensajes = [
    {
      title: 'primer Mensaje',
      mensaje: 'este es un mensaje',
      public: true
    },
    {
      title: 'segundo Mensaje',
      mensaje: 'este es un mensaje',
      public: false
    }
  ];
  render() {
    return <ListOfMessages Messages={this.mensajes} />;
  }
}

export default Home;
