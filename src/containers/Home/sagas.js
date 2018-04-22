import { put, takeLatest } from 'redux-saga/effects';
import { PUBLISH_MESSAGE } from './Constants';
import { publishMessageSuccess, publishMessageError } from './Actions';
import MessageService from '../../services/MessageService';

export function* fetchPublishMessage(message){
    try{
        const messageService = new MessageService();
        const sampleMessage = yield(messageService.addMessage(message));
        yield put(publishMessageSuccess(sampleMessage));
    }catch(err){
        yield put(publishMessageError());
    }
}

export function* publishMessage(){
    yield takeLatest(PUBLISH_MESSAGE,fetchPublishMessage);
}

export default [publishMessage];