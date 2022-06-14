const express = require('express');

const {
  HTTP_OK_STATUS,
  HTTP_NOT_FOUND, 
  HTTP_OK_CREATED, 
  HTTP_NO_CONTENT, 
} = require('./defaultVariables');

// Middlewares
const tokenValidation = require('./tokenValidation');
const nameValidation = require('./nameValidation');
const ageValidation = require('./ageValidation');
const { talkValidation, watchedValidation, rateValidation } = require('./talkValidation');

// Helpers
const newLastId = require('./findLastId');
const { readFile, addNewTalker, editTalker, deleteTalker } = require('./handlingDataFile');
// const invalidEditId = require('./invalidEditId');

const router = express.Router();

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

router.post('/', [
  tokenValidation,
  nameValidation,
  ageValidation,
  talkValidation,
  watchedValidation,
  rateValidation,
  (req, res) => {
  const { name, age, talk } = req.body;

  const fileData = readFile();
  const id = newLastId(fileData);
  const newTalker = { id, name, age, talk };
  res.status(HTTP_OK_CREATED).json(newTalker);
  addNewTalker(fileData, newTalker);
}]);

router.put('/:id', [
  tokenValidation,
  nameValidation,
  ageValidation,
  talkValidation,
  watchedValidation,
  rateValidation,
  (req, res) => {
  const id = Number(req.params.id);
  const fileData = readFile();
  
  // if (invalidEditId(fileData, id, res)) return;

  const { name, age, talk } = req.body;

  const talkerUpdate = { id, name, age, talk };
  res.status(HTTP_OK_STATUS).json(talkerUpdate);
  editTalker(fileData, id, talkerUpdate);
}]);

router.delete('/:id', [
  tokenValidation,
  (req, res) => {
    const id = Number(req.params.id);
    const fileData = readFile();
    deleteTalker(fileData, id);
    res.status(HTTP_NO_CONTENT).end();
}]);

module.exports = router;