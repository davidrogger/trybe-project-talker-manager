const {
  HTTP_NOT_FOUND, 
} = require('../helpers/defaultVariables');

const {
  readFile,
} = require('../helpers/handlingDataFile');

function idExists(id) {
  const talkers = readFile();
  return talkers.some((talker) => talker.id === id);
}

function idValidation(req, res, next) {
  const id = Number(req.params.id);

  if (!idExists(id)) {
    return res.status(HTTP_NOT_FOUND).json({ message: 'Pessoa palestrante não encontrada' });
  }

  next();
}

module.exports = idValidation;
