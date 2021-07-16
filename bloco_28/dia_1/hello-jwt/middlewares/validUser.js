const Joi = require('joi');

const validUser = (req, _res, next) => {
  const { error } = Joi.object({
    username: Joi.string().min(5).alphanum().required(),
    password: Joi.string().min(5).required(),
  }).validate(req.body);

  if (error) return next(error);

  next();
};

module.exports = validUser;
