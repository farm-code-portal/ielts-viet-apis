const Joi = require('joi');

const insertStudentSchema = Joi.object().keys({
    name: Joi.string().max(100).required(),
    avatar: Joi.string().uri().required(),
    introduction: Joi.string().required(),
    school: Joi.string().max(100).required(),
    description: Joi.string().required(),
    level: Joi.string().required(),
    resources: Joi.array().items(Joi.string().uri()).max(20).required(),
});

const updateStudentSchema = Joi.object().keys({
    name: Joi.string().max(100),
    avatar: Joi.string().uri(),
    introduction: Joi.string(),
    school: Joi.string().max(100),
    description: Joi.string(),
    level: Joi.string(),
    resources: Joi.array().items(Joi.string().uri()).max(20),
});

module.exports = {
    insertStudentSchema,
    updateStudentSchema,
};