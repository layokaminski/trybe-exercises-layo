// services/Cep.js

const Cep = require('../models/Cep');

const findAddressByCep = async (searchedCep) => {
  // Buscamos o CEP através do Model
  const cep = await Cep.findAddressByCep(searchedCep);

  // Caso não econtre nenhum CEP, o service retorna um objeto de erro.
  if (!cep) {
    return {
      error: {
        code: 'notFound',
        message: 'CEP não encontrado'
      },
    };
  }

  // Por fim, retornamos o CEP correto
  return cep;
};

module.exports = {
  findAddressByCep,
};