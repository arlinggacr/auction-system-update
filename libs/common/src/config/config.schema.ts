import * as Joi from 'joi';

export const configValidationSchema = Joi.object({
  PORT: Joi.number().default(3000).required(),
  STAGE: Joi.string().required(),
  DB_HOST: Joi.string().required(),
  DB_PORT: Joi.number().default(5432).required(),
  DB_NAME: Joi.string().required(),
  DB_USERNAME: Joi.string().required(),
  DB_PASSWORD: Joi.string().required(),
  JWT_ACCESS_SECRET_KEY: Joi.string().required(),
  JWT_ACCESS_EXPIRED: Joi.string().required(),
  JWT_REFRESH_SECRET_KEY: Joi.string().required(),
  JWT_REFRESH_EXPIRED: Joi.string().required(),
  JWT_ACCESS_COOKIE_KEY: Joi.string().required(),
  JWT_ACCESS_COOKIE_EXPIRED: Joi.string().required(),
  JWT_REFRESH_COOKIE_KEY: Joi.string().required(),
  JWT_REFRESH_COOKIE_EXPIRED: Joi.string().required(),
});
