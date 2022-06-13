const express = require('express');
const crypto = require('crypto');

const router = express.Router();

const { HTTP_OK_STATUS } = require('./defaultVariables');

const tokenGenerate = () => {
  const token = crypto.randomBytes(8).toString('hex');
  return token;
};

router.post('/', (_req, res) => {
  const token = tokenGenerate();
  res.status(HTTP_OK_STATUS).json({ token });
});

module.exports = router;

// tokenGenerate credits: https://stackoverflow.com/questions/8855687/secure-random-token-in-node-js