import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import {reducers} from '@reducers/index';

const composeEnhancers =
  (process.env.NODE_ENV === 'development' &&
    (<any> window) &&
    (<any> window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducer = combineReducers(reducers);

export function configureStore() {
  return createStore(reducer, composeEnhancers(
    applyMiddleware(thunk)
  ));
}