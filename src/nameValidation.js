const isUndefined = require('./isUndefined');
const invalidLength = require('./invalidLength');

const nameValidation = (req, res, next) => {
  const { name } = req.body;
  const minLength = 3;

  if (isUndefined({ name }, res)) return;  
  if (invalidLength({ name }, res, minLength)) return;

  next();
};

module.exports = nameValidation;