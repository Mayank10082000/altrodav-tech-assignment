import Joi from "joi";

const formatErrorMessage = (error) => {
  return error.details[0].message;
};
