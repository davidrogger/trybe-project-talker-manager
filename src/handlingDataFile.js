const fs = require('fs');

const filePath = '/app/talker.json';
const encodingType = 'utf-8';

const readFile = () => JSON.parse(fs.readFileSync(filePath, encodingType));

const addNewTalker = (data, newTalker) => {
  const newData = [...data, newTalker];
  fs.writeFileSync(filePath, JSON.stringify(newData));
};

const editTalker = (data, id, update) => {
  const indexPosition = data.findIndex((talker) => talker.id === id);
  
  const newData = [...data];
  newData.splice(indexPosition, 1, update);
  fs.writeFileSync(filePath, JSON.stringify(newData));
};

module.exports = { readFile, addNewTalker, editTalker };