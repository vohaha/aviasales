import { compose, createStore } from 'redux';
import rootReducer from './reducers';

// If Redux DevTools Extension is installed use it, otherwise use Redux compose
/* tslint:disable */
const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']
    ? window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']
    : compose;
/* tslint:enable */

export const store = createStore(rootReducer, {}, composeEnhancers());

export default store;
