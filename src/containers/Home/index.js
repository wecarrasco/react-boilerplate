import React, { Component } from 'react';
import ListOfMessages from '../../components/ListOfMessages';
import SendMessage from '../../components/SendMessage';
import { isCheckbox, isContent, isTitle } from './helperFunctions';
import { newPrivacy, newTitle, newContent } from './setNewMessage';
import validate from './validateForm';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {publishMessage} from './Actions';
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
    newMessage: { ...this.defaultNewMessage }
  };


  // $FlowFixMe
  changeValue = evt => {
    const fn = cond([
      [
        isCheckbox,
        (x, value) => {
          const nuevoMensaje = newPrivacy(this.state.newMessage, value);
          this.setState({ ...this.state, newMessage: nuevoMensaje });
        }
      ],
      [
        isTitle,
        (x, value) => {
          const nuevoTitulo = newTitle(this.state.newMessage, value);
          this.setState({ ...this.state, newMessage: nuevoTitulo });
        }
      ],
      [
        isContent,
        (x, value) => {
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
    const newMessageConMod = {...this.state.newMessage, publicMod: !this.state.newMessage.public};
    const isValido = validate(newMessageConMod);
    // $FlowFixMe
    isValido.valido ? compose(this.borrarInputs, this.props.publishMessage)(newMessageConMod) : alert(isValido.error)
    evt.preventDefault();
  };

  render() {
    return (
      <div>
        <ListOfMessages Messages={this.props.messages} />
        <SendMessage
          defaultValues={this.state.newMessage}
          onSubmit={this.handleSubmit}
          onChange={this.changeValue}
        />
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {messages: state.messageReducer.messages}
};

const mapDispatchToProps = dispatch=> bindActionCreators({
  publishMessage
},dispatch);


export default connect(mapStateToProps,mapDispatchToProps)(Home);
