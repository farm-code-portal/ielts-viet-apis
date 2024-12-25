const Joi = require('joi');

const InseartBlogSchema = Joi.object().keys({
  title: Joi.string().required().length(100),
});

module.exports = {
  InseartBlogSchema,
};
