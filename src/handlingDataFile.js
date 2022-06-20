const fs = require('fs');

const path = __dirname;
const filePath = `${path}/../talker.json`;
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

const deleteTalker = (data, id) => {
  const indexPosition = data.findIndex((talker) => talker.id === id);

  data.splice(indexPosition, 1);
  fs.writeFileSync(filePath, JSON.stringify(data));
};

const findData = (nameSample) => {
  const data = readFile();
  const personData = data.filter((person) => person.name.includes(nameSample));

  if (!nameSample) return data;
  return personData;
};

module.exports = { readFile, addNewTalker, editTalker, deleteTalker, findData };