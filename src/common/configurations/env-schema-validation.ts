import * as joi from 'joi';

export const envShcema: joi.ObjectSchema<any> = joi.object({
  PORT: joi.number().integer().default(3000),
  NODE_ENV: joi.string().required(),
});
