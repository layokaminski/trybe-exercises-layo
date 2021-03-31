import React, { Component } from 'react';
import { connect } from 'react-redux';

class FormDataDisplay extends Component {
  render() {
    const { name, email, cpf, address } = this.props;
    return (
      <div>
        <h2>Dados enviados</h2>
        <h3>Pessoal</h3>
        <div> Name: { name }</div>
        <div> Email: { email }</div>
        <div> CPF: { cpf }</div>
        <div> Endereço: { address }</div>
{/*         <div> Cidade: { city }</div>
        <div> Estado: { countryState }</div>
        <div> Tipo de residência: { addressType }</div>
        <h3>Profissional</h3>
        <div> Currículo: { resume }</div>
        <div> Cargo: { role }</div>
        <div> Descrição do cargo: { roleDescription }</div> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  name: state.updateStateReducer.name,
  email: state.updateStateReducer.email,
  cpf: state.updateStateReducer.cpf,
  address: state.updateStateReducer.address
})

/* const INITIAL_STATE = {
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
} */

export default connect(mapStateToProps)(FormDataDisplay);