const Joi = require('joi');

const insertTeacherSchema = Joi.object().keys({
    name: Joi.string().max(100).required(),
    avatar: Joi.string().uri().required(),
    introduction: Joi.string().max(3000).required(),
    nationality: Joi.string().max(100).required(),
    experiences: Joi.string().max(100).required(),
    certificates: Joi.array().items(Joi.string()).max(20).required(),
});

const updateTeacherSchema = Joi.object().keys({
    name: Joi.string().max(100),
    avatar: Joi.string().uri(),
    introduction: Joi.string().max(3000),
    nationality: Joi.string().max(100),
    experiences: Joi.string().max(100),
    certificates: Joi.array().items(Joi.string()).max(20),
});

module.exports = {
    insertTeacherSchema,
    updateTeacherSchema,
};