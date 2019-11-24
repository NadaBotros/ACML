const Joi = require('joi')
module.exports = {
  createValidation: request => {
    const createSchema = {
      latitude: Joi.number().required(),
      longitude: Joi.number().required()
    }

    return Joi.validate(request, createSchema)
  },

  actionValidation: request => {
    const actionSchema = {
      id: Joi.string().required(),
      occupied: Joi.boolean(),
      latitude: Joi.number(),
      longitude: Joi.number()
    }

    return Joi.validate(request, actionSchema)
  }
}
