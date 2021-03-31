import { REGISTER } from '../actions';

const INITIAL_STATE = {
  name: '',
  email: '',
  cpf: '',
  address: '',
  city: '',
  countryState: '',
  addressType: '',
  resume: '',
  role: '',
  roleDescription: '',
  formError: {},
}

export const updateStateReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REGISTER:
        return { name: action.value };
    default:
    return state;
  }
}