const express = require('express');
const fs = require('fs');

const { HTTP_OK_STATUS, HTTP_NOT_FOUND, HTTP_OK_CREATED } = require('./defaultVariables');
const tokenValidation = require('./tokenValidation');
const nameValidation = require('./nameValidation');
const ageValidation = require('./ageValidation');
const talkValidation = require('./talkValidation');

const router = express.Router();

const filePath = '/app/talker.json';
const encodingType = 'utf-8';

const readFile = () => JSON.parse(fs.readFileSync(filePath, encodingType));

router.get('/', (_req, res) => {
  const fileData = readFile();

  if (fileData.length === 0) {
    return res.status(HTTP_OK_STATUS).json([]);
  }

  return res.status(HTTP_OK_STATUS).json(fileData);
});

router.get('/:id', (req, res) => {
  const fileData = readFile();
  const { id } = req.params;

  const selectedId = fileData.find((user) => user.id === Number(id));
  if (!selectedId) {
 return res
  .status(HTTP_NOT_FOUND)
  .json({ message: 'Pessoa palestrante não encontrada' }); 
}
  
  return res.status(HTTP_OK_STATUS).json(selectedId);
});

router.post('/', [tokenValidation, nameValidation, ageValidation, talkValidation, (req, res) => {
  const { id, name, age, talk } = req.body;

  const newTalker = { id, name, age, talk };
  res.status(HTTP_OK_CREATED).json(newTalker);
}]);

module.exports = router;