const { HTTP_BAD_REQUEST } = require('./defaultVariables');
const isUndefined = require('./isUndefined');

const ageValidation = (req, res, next) => {
  const { age } = req.body;

  if (isUndefined({ age }, res)) return;

  const ageNumber = Number(age);

  const invalidAge = ageNumber < 18;

  if (invalidAge) {
    return res
    .status(HTTP_BAD_REQUEST)
    .json({ message: 'A pessoa palestrante deve ser maior de idade' });
  }

  next();
};

module.exports = ageValidation;