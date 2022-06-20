const { HTTP_UNAUTHORIZED } = require('./defaultVariables');

const tokenValidation = (req, res, next) => {
  const { authorization } = req.headers;

  const tokenValidLength = 16;

  if (!authorization) {
    return res.status(HTTP_UNAUTHORIZED).json({ message: 'Token não encontrado' });
  }
  if (authorization.length !== tokenValidLength) {
    return res.status(HTTP_UNAUTHORIZED).json({ message: 'Token inválido' });
  }

  next();
};

module.exports = tokenValidation;