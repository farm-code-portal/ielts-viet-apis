const Joi = require('joi');

const insertBlogSchema = Joi.object().keys({
  title: Joi.string().max(100).required(),
  author: Joi.string().max(100).required(),
  description: Joi.string().max(2000).required(),
  thumbnail: Joi.string().uri().required(),
  blogDetail: Joi.string().required(),
});

const updateBlogSchema = Joi.object().keys({
  title: Joi.string().max(100),
  author: Joi.string().max(100),
  description: Joi.string().max(2000),
  thumbnail: Joi.string().uri(),
  blogDetail: Joi.string(),
});

module.exports = {
  insertBlogSchema,
  updateBlogSchema,
};
