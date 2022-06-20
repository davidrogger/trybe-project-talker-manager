const express = require('express');

const router = express.Router();

const { HTTP_OK_STATUS } = require('../helpers/defaultVariables');
const loginValidation = require('../middlewares/loginValidation');
const tokenGenerate = require('../helpers/tokenGenerate');

router.post('/', [loginValidation, (_req, res) => {
  const token = tokenGenerate();
  res.status(HTTP_OK_STATUS).json({ token });
}]);

module.exports = router;

// tokenGenerate credits: https://stackoverflow.com/questions/8855687/secure-random-token-in-node-js