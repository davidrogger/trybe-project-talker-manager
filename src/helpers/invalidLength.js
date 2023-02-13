const { HTTP_BAD_REQUEST } = require('./defaultVariables');

const invalidLength = (item, res, minLength) => {
  const itemName = Object.keys(item).join();

  if (item[itemName].length < minLength) {
    res
    .status(HTTP_BAD_REQUEST)
    .json({ message: `O "${itemName}" deve ter pelo menos ${minLength} caracteres` });

    return true;
  }
  return false;
};

module.exports = invalidLength;