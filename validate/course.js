const Joi = require('joi');

const insertCourseSchema = Joi.object().keys({
  name: Joi.string().max(100).required(),
  thumbnail: Joi.string().uri().required(),
  price: Joi.string().max(100).required(),
  duration: Joi.number().positive().required(),
  level_begin: Joi.string().required(),
  level_end: Joi.string().required(),
  category: Joi.string().required(),
  goal: Joi.array().items(Joi.string()).max(20).required(),
});

const updateCourseSchema = Joi.object().keys({
  name: Joi.string().max(100),
  thumbnail: Joi.string().uri(),
  price: Joi.string().max(100),
  duration: Joi.number().positive(),
  level_begin: Joi.string(),
  level_end: Joi.string(),
  category: Joi.string(),
  goal: Joi.array().items(Joi.string()).max(20),
});

module.exports = {
  insertCourseSchema,
  updateCourseSchema,
};
