const express = require('express');
const fs = require('fs');

const router = express.Router();

const fileName = './talker.json';
const encodingType = 'utf-8';

router.get('/', (_req, res) => {
  const fileData = JSON.parse(fs.readFileSync(fileName, encodingType));

  if (fileData.length === 0) {
    return res.status(200).json([]);
  }

  return res.status(200).json(fileData);
});

module.exports = router;