module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) return next('no_token');

  const tokenRegexTest = (token) => /^[a-z0-9]{16}$/i.test(token);

  return tokenRegexTest(token) ? next() : next('invalid_token');
};
