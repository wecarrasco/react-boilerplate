import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import app from './containers/App/reducer';
import languageProvider from './containers/LanguageProvider/reducer';

export default combineReducers({
  routing: routerReducer,
  app,
  languageProvider
});
