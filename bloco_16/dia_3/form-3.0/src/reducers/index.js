import { combineReducers } from 'redux';
import { registerReducer } from './registerReducer';
import { updateStateReducer } from './updateStateReducer';

const rootReducers = combineReducers({ registerReducer, updateStateReducer });

export default rootReducers;