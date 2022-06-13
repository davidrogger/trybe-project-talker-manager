const { HTTP_BAD_REQUEST } = require('./defaultVariables');

const tokenValidation = (req, res, next) => {
  const { authorization } = req.headers;

  const tokenValidLength = 16;

  if (!authorization) {
    return res.status(HTTP_BAD_REQUEST).json({ message: 'Token não encontrado' });
  }
  if (authorization.length !== tokenValidLength) {
    return res.status(HTTP_BAD_REQUEST).json({ message: 'Token inválido' });
  }

  next();
};

module.exports = tokenValidation;