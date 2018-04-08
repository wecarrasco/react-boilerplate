import { persistCombineReducers } from 'redux-persist';
import { routerReducer } from 'react-router-redux';
// $FlowFixMe
import storage from 'redux-persist/lib/storage';
import app from './containers/App/reducer';
import languageProvider from './containers/LanguageProvider/reducer';
const config = {
  key: 'primary',
  storage
};

export default persistCombineReducers(config, {
  routing: routerReducer,
  app,
  languageProvider
});
