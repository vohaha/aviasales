import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

// If Redux DevTools Extension is installed use it, otherwise use Redux compose
/* tslint:disable */
const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']
    ? window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']
    : compose;
/* tslint:enable */

const middlewares = [sagaMiddleware];

const enhancers = [applyMiddleware(...middlewares)];

export const store = createStore(rootReducer, {}, composeEnhancers(...enhancers));

sagaMiddleware.run(rootSaga);

export default store;
