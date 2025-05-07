import Joi from "joi";

const formatErrorMessage = (error) => {
  return error.details[0].message;
};

export const createActivityValidator = (req, res) => {
  const schema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    location: Joi.string().required(),
    date: Joi.date().required(),
    time: Joi.string().required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: formatErrorMessage(error) });
  }
  next();
};
