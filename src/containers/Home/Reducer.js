import {PUBLISH_MESSAGE_SUCCESS, PUBLISH_MESSAGE_ERROR} from './Constants';

import {append} from 'ramda'
const initialState={
    messages:[],
    errorMessage: false,
}

function messageReducer(state = initialState, action){
    switch(action.type){
        case PUBLISH_MESSAGE_SUCCESS:
            const payload = {...action.payload,public: action.payload.public };
            return{ ...state, 
                messages: append(payload, state.messages)
            }
        case PUBLISH_MESSAGE_ERROR:
            return{ ...state, 
                errorMessage: true
            }
        default:
            return state
    }
}

export default messageReducer;