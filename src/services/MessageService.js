const request = require('../utils/request').default;

export default class MessageService{
    addMessage(message){
        return request('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
              title: message.payload.title,
              mensaje: message.payload.mensaje,
              public: message.payload.publicMod
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }})
    }
    
}