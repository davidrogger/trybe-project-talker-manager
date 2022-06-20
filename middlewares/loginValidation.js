const isUndefined = require('./isUndefined');
const invalidEmail = require('./invalidEmail');
const invalidLength = require('./invalidLength');

const { HTTP_BAD_REQUEST } = require('./defaultVariables');

const loginValidation = (req, res, next) => {
  const { email, password } = req.body;
  const minLength = 6;

  if (isUndefined({ email }, res)) return;
  
  if (invalidEmail(email)) {
 return res
  .status(HTTP_BAD_REQUEST)
  .json({ message: 'O "email" deve ter o formato "email@email.com"' }); 
}

  if (isUndefined({ password }, res)) return;
  if (invalidLength({ password }, res, minLength)) return;

  next();
};

module.exports = loginValidation;