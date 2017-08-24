import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import app from './App/reducer';

export default combineReducers({
  routing: routerReducer,
  app,
});
