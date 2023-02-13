const invalidDate = (date) => {
  // date Format: "dd/mm/aaaa"
  const dateRegex = /^(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/;

  const isInvalidDate = !dateRegex.test(date);

  return isInvalidDate;
};

module.exports = invalidDate;

// regex credits: https://www.codegrepper.com/code-examples/javascript/how+to+validate+date+input+in+javascript