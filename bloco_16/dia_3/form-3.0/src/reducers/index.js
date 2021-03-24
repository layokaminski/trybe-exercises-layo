import { combineReducers } from 'redux';
import { registerReducer } from './registerReducer';

const rootReducers = combineReducers({ registerReducer });

export default rootReducers;