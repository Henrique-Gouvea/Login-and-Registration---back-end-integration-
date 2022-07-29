import Joi, { ValidationResult } from 'joi'
import { IUser } from '../interfaces/IUser'

export const validateUser = (data: IUser): ValidationResult => {
  const schema = Joi.object({
    name: Joi
    .string()
    .required()
    .min(3)
    .messages(
      { 
        'string.min': 'Name não pode ser vazio, mínimo 3 caracteres',
        'any.required': 'Name não pode estar vazio'
      },
    ),
    password: Joi
    .string()
    .min(6)
    .required()
      .messages(
        {
          'string.min': 'Password tem que ter no minimo 6 caracteres',
          'any.required': 'Password não pode estar vazio'
        },
      ),
  });

  const { error, value } = schema.validate(data);

  if (error) throw error;

  return value;
};