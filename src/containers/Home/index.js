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

  // $FlowFixMe
  addMessage = (mensaje, publicMod, title) => {
    const newMensaje = { title, mensaje, public: publicMod };
    const newState = this.state.mensajes.push(newMensaje);
    this.setState({ newState });
  };

  // $FlowFixMe
  logEvent = evt => {
    console.log(evt.target.value);
    console.log(evt.target.checked);
    console.log(evt.target);
  };
  // $FlowFixMe
  handleSubmit = evt => {
    console.log(evt.target);
    evt.preventDefault();
  };

  render() {
    return (
      <div>
        <ListOfMessages Messages={this.state.mensajes} />
        <SendMessage onSubmit={this.handleSubmit} onChange={this.logEvent} />
      </div>
    );
  }
}

export default Home;
