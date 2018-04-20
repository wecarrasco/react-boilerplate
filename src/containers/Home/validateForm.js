// $FlowFixMe
import { cond, equals, compose, always } from 'ramda';

// $FlowFixMe
const validate = (message) => {
  return compose(isMessageOK, isTitleOK)(message);
}

// $FlowFixMe
const isTitleOK = (message) =>{
  return {valido: !equals(message.title, ""), message};
}

// $FlowFixMe
const isMessageOK = ({valido, message}) =>{
  var validoMensaje = cond([
    [equals(false), always({valido, message, error:"El titulo no puede ir vacío"})],
    [equals(true), always({valido: !equals(message.mensaje, ""), message, error:"El mensaje no puede ir vacío"})]
  ]);
   return validoMensaje(valido);
}

export default validate;
