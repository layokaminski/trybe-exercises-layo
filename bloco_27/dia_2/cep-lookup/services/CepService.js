const CepModel = require('../models/CepModel');

const getCep = async (cepFind) => {
  console.log(cepFind)
  const cep = await CepModel.getCep(cepFind);

  if (!cep) {
    return {
      error: {
        code: 'notFound',
        message: 'CEP não encontrado'
      },
    };
  }

  return cep;
};

module.exports = {
  getCep,
};
