import { SUBMIT } from '../actions';

const INITIAL_STATE = {
  send: false,
}

export const registerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SUBMIT:
      return { ...state, send: action.submitted };
    default:
      return state;
  }
}
