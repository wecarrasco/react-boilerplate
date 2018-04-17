import React, { Component } from 'react';
import ListOfMessages from '../../components/ListOfMessages';
import SendMessage from '../../components/SendMessage';
import { isCheckbox, isContent, isTitle } from './helperFunctions';
import { newPrivacy, newTitle, newContent } from './setNewMessage';
// $FlowFixMe
import { cond, propOr, compose } from 'ramda';
class Home extends Component<any, any> {
  // $FlowFixMe
  defaultNewMessage = {
    title: '',
    mensaje: '',
    public: false
  };

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
    ],
    newMessage: { ...this.defaultNewMessage }
  };

  // $FlowFixMe
  addMessage = ({ mensaje, publicMod, title }) => {
    const newMensaje = { title, mensaje, public: publicMod };
    const newState = this.state.mensajes.push(newMensaje);
    this.setState({ newState });
  };

  // $FlowFixMe
  changeValue = evt => {
    // console.log(evt.target.value);
    // console.log(evt.target.checked);
    // console.log(evt.target.id);
    const fn = cond([
      [
        isCheckbox,
        (x, value) => {
          console.log('isCheckbox');
          const nuevoMensaje = newPrivacy(this.state.newMessage, value);
          this.setState({ ...this.state, newMessage: nuevoMensaje });
        }
      ],
      [
        isTitle,
        (x, value) => {
          console.log('isTitle');
          const nuevoTitulo = newTitle(this.state.newMessage, value);
          this.setState({ ...this.state, newMessage: nuevoTitulo });
        }
      ],
      [
        isContent,
        (x, value) => {
          console.log('isContent');
          const nuevoContenido = newContent(this.state.newMessage, value);
          this.setState({ ...this.state, newMessage: nuevoContenido });
        }
      ]
    ]);
    const value = propOr(evt.target.value, 'checked');
    fn(evt.target.id, value(evt.target));
  };
  borrarInputs = () => {
    this.setState({ ...this.state, newMessage: { ...this.defaultNewMessage } });
  };
  // $FlowFixMe
  handleSubmit = evt => {
    // $FlowFixMe
    compose(this.borrarInputs, this.addMessage)(this.state.newMessage);
    evt.preventDefault();
  };

  render() {
    return (
      <div>
        <ListOfMessages Messages={this.state.mensajes} />
        <SendMessage
          defaultValues={this.state.newMessage}
          onSubmit={this.handleSubmit}
          onChange={this.changeValue}
        />
      </div>
    );
  }
}

export default Home;
