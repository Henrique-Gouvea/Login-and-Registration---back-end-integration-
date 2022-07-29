"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUser = void 0;
const joi_1 = __importDefault(require("joi"));
const validateUser = (data) => {
    const schema = joi_1.default.object({
        name: joi_1.default
            .string()
            .required()
            .min(3)
            .messages({
            'string.min': 'Name não pode ser vazio, mínimo 3 caracteres',
            'any.required': 'Name não pode estar vazio'
        }),
        password: joi_1.default
            .string()
            .min(6)
            .required()
            .messages({
            'string.min': 'Password tem que ter no minimo 6 caracteres',
            'any.required': 'Password não pode estar vazio'
        }),
    });
    const { error, value } = schema.validate(data);
    if (error)
        throw error;
    return value;
};
exports.validateUser = validateUser;
