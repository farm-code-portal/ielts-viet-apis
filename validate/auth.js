const Joi = require('joi');

const LoginSchema = Joi.object().keys({
  username: Joi.string().max(50).required(),
  password: Joi.string().required(),
});

module.exports = {
  LoginSchema,
};
