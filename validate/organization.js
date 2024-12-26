const Joi = require('joi');


const updateOrganizationSchema = Joi.object().keys({
    name: Joi.string().max(100),
    description: Joi.string().max(500),
    logo: Joi.string().uri(),
    phone: Joi.string().max(12),
    email: Joi.string().max(100),
    facebook: Joi.string().max(100).uri(),
    zalo: Joi.string().max(100).uri(),
    messenger: Joi.string().max(100).uri(),
    address: Joi.string().max(200),
});

module.exports = {
    updateOrganizationSchema,
};