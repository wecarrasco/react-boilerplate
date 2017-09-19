import {createStore, applyMiddleware, compose} from 'redux';
import {routerMiddleware} from 'react-router-redux';
import {persistStore, autoRehydrate} from 'redux-persist';
import createHistory from 'history/createBrowserHistory';
import rootReducer from './rootReducer';

export const history = createHistory();

const initialState = {};
const enhancers = [];
const middleware = [routerMiddleware(history)];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers, autoRehydrate());

const store = createStore(rootReducer, initialState, composedEnhancers);
persistStore(store);

export default store;
