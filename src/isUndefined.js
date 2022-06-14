const { HTTP_BAD_REQUEST } = require('./defaultVariables');

const isUndefined = (item, res) => {
  const itemName = Object.keys(item).join();
  if (!item[itemName] && item[itemName] !== 0) {
    res.status(HTTP_BAD_REQUEST).json({ message: `O campo "${itemName}" é obrigatório` });
    return true;
  }
  return false;
};

module.exports = isUndefined;