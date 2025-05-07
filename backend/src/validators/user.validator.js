import Joi from "joi";

const formatErrorMessage = (error) => {
  return error.details[0].message;
};

export const signupValidator = (req, res) => {
  const schema = Joi.object({
    fullName: Joi.string().required(),
    email: Joi.string().email().required(),
    phoneNumber: Joi.string()
      .pattern(/^[0-9]{10}$/)
      .required(),
    password: Joi.string().required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: formatErrorMessage(error) });
  }
  next();
};

export const loginValidator = (req, res) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: formatErrorMessage(error) });
  }
  next();
};

export const forgotPasswordValidator = (req, res) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: formatErrorMessage(error) });
  }
  next();
};

export const resetPasswordValidator = (req, res) => {
  const schema = Joi.object({
    newPassword: Joi.string().required(),
    confirmNewPassword: Joi.string().required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: formatErrorMessage(error) });
  }
  next();
};
