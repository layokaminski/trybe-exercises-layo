// controllers/Cep.js

const rescue = require('express-rescue');
const service = require('../services/Cep');

const CEP_REGEX = /\d{5}-?\d{3}/;

const findAddressByCep = rescue(async (req, res, next) => {
  const { cep } = req.params;

  if (!CEP_REGEX.test(cep)) {
    return res.status(400).json({ error: { code: 'invalidData', message: 'CEP inválido' } });
  }

  const address = await service.findAddressByCep(cep);

  if (address.error) {
    return next(address.error);
  }

  return res.status(200).json(address);
});

module.exports = {
  findAddressByCep,
};