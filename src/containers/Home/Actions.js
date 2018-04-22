import {PUBLISH_MESSAGE, PUBLISH_MESSAGE_SUCCESS, PUBLISH_MESSAGE_ERROR} from './Constants';

export const publishMessage = (message) =>{
    return {
        type: PUBLISH_MESSAGE,
        payload: message,
    }
}

export function publishMessageSuccess(message){
    return{
        type: PUBLISH_MESSAGE_SUCCESS,
        payload: message
    };
}

export function publishMessageError(errorMessage){
    return{
        type: PUBLISH_MESSAGE_ERROR,
        payload: errorMessage
    };
}