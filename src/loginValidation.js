const isUndefined = require('./isUndefined');
const invalidEmail = require('./invalidEmail');
const invalidLength = require('./invalidLength');

const { HTTP_BAD_REQUEST } = require('./defaultVariables');

const loginValidation = (req, res, next) => {
  const { email, password } = req.body;
  
  if (isUndefined({ email }, res)) return;
  
  if (invalidEmail(email)) {
 return res
  .status(HTTP_BAD_REQUEST)
  .json({ message: 'O "email" deve ter o formato "email@email.com"' }); 
}

  if (isUndefined({ password }, res)) return;
  if (invalidLength({ password }, res, 6)) return;

  next();
};

module.exports = loginValidation;