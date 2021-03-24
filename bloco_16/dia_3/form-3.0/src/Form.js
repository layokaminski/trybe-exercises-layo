import React, { Component } from 'react';
import PersonalForm from './PersonalForm';
import ProfessionalForm from './ProfessionalForm';
import { registerName } from './actions';
import { connect } from 'react-redux';

class Form extends Component {
  render() {
    const { sendForm, resetForm, changeHandler, currentState, onBlurHandler } = this.props;

    return (
      <form>
        <PersonalForm
          changeHandler={ changeHandler }
          onBlurHandler= { onBlurHandler }
          currentState= { currentState }
        />
        <ProfessionalForm changeHandler={ changeHandler } />
        <input
            type="button"
            onClick={() => sendForm(true) }
            value="Enviar"
        />
        <input
          type="reset"
          onClick={() => resetForm(false) }
          value="Limpar"
        />
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  sendForm: (submitted) => dispatch(registerName(submitted)),
  resetForm: (submitted) => dispatch(registerName(submitted)),
});

export default connect(null, mapDispatchToProps)(Form);
