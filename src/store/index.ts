import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import {reducers, IApplicationState} from '@reducers/index';

const composeEnhancers =
  (process.env.NODE_ENV === 'development' &&
    (<any> window) &&
    (<any> window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducer = combineReducers<IApplicationState>(reducers);

export const store = createStore(reducer, composeEnhancers(
  applyMiddleware(thunk)
));
