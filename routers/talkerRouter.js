const express = require('express');

const {
  HTTP_OK_STATUS,
  HTTP_OK_CREATED, 
  HTTP_NO_CONTENT, 
} = require('../helpers/defaultVariables');

// Middlewares
const tokenValidation = require('../middlewares/tokenValidation');
const nameValidation = require('../middlewares/nameValidation');
const ageValidation = require('../middlewares/ageValidation');
const idValidation = require('../middlewares/idValidation');

const {
   talkValidation,
    watchedValidation,
     rateValidation,
     } = require('../middlewares/talkValidation');

// Helpers
const newLastId = require('../helpers/findLastId');
const {
  readFile,
  addNewTalker,
  editTalker,
  deleteTalker,
  findData,
} = require('../helpers/handlingDataFile');

const router = express.Router();

router.get('/search', [
  tokenValidation,
  (req, res) => {
    const { q } = req.query;
    const talkerData = findData(q);
    res.status(HTTP_OK_STATUS).json(talkerData);
}]);

router.get('/', (_req, res) => {
  const fileData = readFile();

  if (fileData.length === 0) {
    return res.status(HTTP_OK_STATUS).json([]);
  }

  return res.status(HTTP_OK_STATUS).json(fileData);
});

router.get('/:id', [
  idValidation,
  (req, res) => {
  const fileData = readFile();
  const { id } = req.params;

  const selectedId = fileData.find((user) => user.id === Number(id));  
  return res.status(HTTP_OK_STATUS).json(selectedId);
}]);

const validationMiddlewares = [
  tokenValidation, nameValidation, ageValidation,
  talkValidation, watchedValidation, rateValidation,
];

router.post('/', [
  ...validationMiddlewares,
  (req, res) => {
  const { name, age, talk } = req.body;
  const fileData = readFile();
  const id = newLastId(fileData);
  const newTalker = { id, name, age, talk };
  res.status(HTTP_OK_CREATED).json(newTalker);
  addNewTalker(fileData, newTalker);
}]);

router.put('/:id', [
  ...validationMiddlewares, idValidation,
  (req, res) => {
  const id = Number(req.params.id);
  const fileData = readFile();

  const { name, age, talk } = req.body;

  const talkerUpdate = { id, name, age, talk };
  res.status(HTTP_OK_STATUS).json(talkerUpdate);
  editTalker(fileData, id, talkerUpdate);
}]);

router.delete('/:id', [
  tokenValidation, idValidation,
  (req, res) => {
    const id = Number(req.params.id);
    const fileData = readFile();
    deleteTalker(fileData, id);
    res.status(HTTP_NO_CONTENT).end();
}]);

module.exports = router;