import React, { Component } from 'react';
import ListOfMessages from '../../components/ListOfMessages';
import SendMessage from '../../components/SendMessage';
class Home extends Component<any, any> {
  state = {
    mensajes: [
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
    ]
  };

  render() {
    return (
      <div>
        <ListOfMessages Messages={this.state.mensajes} />
        <SendMessage />
      </div>
    );
  }
}

export default Home;
