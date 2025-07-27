import validator from 'validator';

export const validateName = (name) => /^[a-zA-Z' -]+$/.test(name);

export const validateEmail = (email) => validator.isEmail(email);

export const validatePhone = (phone) => /^\+[0-9]{6,15}$/.test(phone);