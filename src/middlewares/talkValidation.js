const invalidDate = require('../helpers/invalidDate');
const { HTTP_BAD_REQUEST } = require('../helpers/defaultVariables');
const isUndefined = require('../helpers/isUndefined');

const talkValidation = (req, res, next) => {
  const { talk } = req.body;
  if (isUndefined({ talk }, res)) return;

  next();
};

const watchedValidation = (req, res, next) => {
  const { talk: { watchedAt } } = req.body;
  if (isUndefined({ watchedAt }, res)) return;
  if (invalidDate(watchedAt)) {
    res
    .status(HTTP_BAD_REQUEST)
    .json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
    return;
  }
  next();
};

const rateValidation = (req, res, next) => {
  const { talk: { rate } } = req.body;
  if (isUndefined({ rate }, res)) return;

  const rateNumber = Number(rate);
  const minNumber = 1;
  const maxNumber = 5;
  const integerNumber = !Number.isInteger(rateNumber);
  const minMaxNumber = rateNumber < minNumber || rateNumber > maxNumber;
  if (integerNumber || minMaxNumber) {
    res
    .status(HTTP_BAD_REQUEST)
    .json({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
    return;
  }

  next();
};

module.exports = { talkValidation, watchedValidation, rateValidation };