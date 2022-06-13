const invalidDate = require('./invalidDate');
const { HTTP_BAD_REQUEST } = require('./defaultVariables');
const isUndefined = require('./isUndefined');

const talkValidation = (req, res, next) => {
  const { talk } = req.body;

  if (isUndefined({ talk }, res)) return;

  const { watchedAt } = talk;

  if (isUndefined({ watchedAt }, res)) return;

  if (invalidDate(watchedAt)) {
    res
    .status(HTTP_BAD_REQUEST)
    .json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
    return;
  }

  next();
};

module.exports = talkValidation;