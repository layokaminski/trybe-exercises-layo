const rescue = require('express-rescue');
const Joi = require('joi');
const CepService = require('../services/CepService');

const regexPattern = /\d{5}-?\d{3}/;

const getCep = rescue(async (req, res, next) => {
  const { cep } = req.params;
  console.log(cep)
  const { error } = Joi.object({
    cep: Joi.string().not().empty().required()
  }).validate(req.body);

  if (error) {
    return next(error);
  }

  const cepFind = await CepService.getCep(cep);

  if (cepFind.error) {
    return next(cepFind.error);
  }

  res.status(200).json(cepFind);
});

module.exports = {
  getCep,
}