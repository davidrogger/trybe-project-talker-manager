const { HTTP_NOT_FOUND } = require('./defaultVariables');

const invalidEditId = (data, id, res) => {
  const indexPosition = data.findIndex((talker) => talker.id === id);
  const notFound = -1;

  if (indexPosition === notFound) {
    res.status(HTTP_NOT_FOUND).json({ message: `"ID" ${id} Not Found` });
    return true;
  }

  return false;
};

module.exports = invalidEditId;