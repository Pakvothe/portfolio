import { createStore, applyMiddleware, compose } from 'redux';
import Reducer from '../reducers';
import thunk from 'redux-thunk';

const store = createStore(
	Reducer,
	applyMiddleware(thunk),
);

export default store;