// src/store/index.js
import { createStore, combineReducers, compose } from 'redux';
import clickReducer from '../reducers';
const rootReducer = combineReducers({ clickReducer });

// const extension = window.devToolsExtension() || ((f) => f);

const store = createStore(rootReducer, compose() );

export default store;