import { applyMiddleware, createStore } from 'redux';
import {thunk} from 'redux-thunk'; // not import thunk from 'redux-thunk' if you're using the latest versions of the package.
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk];

const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;