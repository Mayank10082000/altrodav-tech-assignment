import Joi from "joi";

const formatErrorMessage = (error) => {
  return error.details[0].message;
};

export const createBookingValidator = (req, res) => {
  const schema = Joi.object({
    activityId: Joi.string().required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: formatErrorMessage(error) });
  }
  next();
};

export const getBookingsValidator = (req, res) => {
  const schema = Joi.object({
    activityId: Joi.string().required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: formatErrorMessage(error) });
  }
  next();
};
