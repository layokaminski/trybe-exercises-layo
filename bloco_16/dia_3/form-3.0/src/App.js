import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import FormError from './FormError';
import FormDataDisplay from './FormDataDisplay';
import { connect } from 'react-redux';
import { updateStateAction } from './actions';

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
  // submitted: false,
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = INITIAL_STATE;
  }

  changeHandler = (event) => {
    let { name, value } = event.target;

    if (name === 'name') value = value.toUpperCase();
    if (name === 'address') value = this.validateAddress(value);

    this.updateState(name, value);
  }

  onBlurHandler = event => {
    let { name, value } = event.target;

    if (name === 'city') value = value.match(/^\d/) ? '' : value;

    this.updateState(name, value);
  }

  updateState(name, value) {
    const { updateStateAction } = this.props;
/*     this.setState((state) => ({
      [name]: value,
      formError: {
        ...state.formError,
        [name]: this.validateField(name, value)
      }
    })); */
    updateStateAction(name, value)
  }

  validateAddress = address => address.replace(/[^\w\s]/gi, '')

  handleSubmit = event => {
    event.preventDefault();
  }

  validateField(fieldName, value) {
    switch (fieldName) {
      case 'email':
        const isValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2})$/i)
        return isValid ? '' : ' is invalid';
      default:
        break;
    }
    return '';
  }

  // resetForm = () => { this.setState(INITIAL_STATE) };

  // sendForm = () => { this.setState({ submitted: true }) };

  render() {
    // const { submitted } = this.state;
    const { send } = this.props;
    return (
      <main>
        <Form
          changeHandler={this.changeHandler}
          currentState={ this.state }
          onBlurHandler={ this.onBlurHandler }
        />
        <div className="container">
          <FormError formError={this.state.formError} />
        </div>
        { send && <FormDataDisplay /> }
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  send: state.registerReducer.send,
});

const mapDispatchToProps = (dispatch) => ({
  updateStateAction: (name, value) => dispatch(updateStateAction(name, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
