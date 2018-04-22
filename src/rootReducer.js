import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import app from './containers/App/reducer';
import languageProvider from './containers/LanguageProvider/reducer';
import messageReducer from './containers/Home/Reducer'
export default combineReducers({
  routing: routerReducer,
  app,
  languageProvider,
  messageReducer
});
