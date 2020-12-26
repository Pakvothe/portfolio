import { createStore, applyMiddleware, compose } from 'redux';
import Reducer from '../reducers';
import thunk from 'redux-thunk';

const store = createStore(
	Reducer,
	compose
		(
			applyMiddleware(thunk),
			window.devToolsExtension ? window.devToolsExtension() : f => f
		)
);

export default store;