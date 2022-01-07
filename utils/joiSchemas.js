const joi = require('joi');

const userSchema = joi.object().keys({
  displayName: joi.string().min(8).required(),
  email: joi.string().email().required(),
  password: joi.string().length(6).required(),
  image: joi.string(),
});

const loginSchema = joi.object().keys({
  email: joi.string().email().required(),
  password: joi.string().min(6).required(),
});

const catSchema = joi.object().keys({
  name: joi.string().required(),
});

module.exports = {
  userSchema,
  loginSchema,
  catSchema,
};