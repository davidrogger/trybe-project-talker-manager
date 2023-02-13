const newLastId = (data) => {
  const lastIndex = data.length - 1;
  const lastId = data[lastIndex].id;
  return lastId + 1;
};

module.exports = newLastId;