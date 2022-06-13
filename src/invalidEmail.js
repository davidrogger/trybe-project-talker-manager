const invalidEmail = (email) => {
  const regexValidEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const emailInvalidFormat = !regexValidEmail.test(email);

  return emailInvalidFormat;
};

module.exports = invalidEmail;