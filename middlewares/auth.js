const rescue = require('express-rescue');

const regex = /[^a-zA-Z0-9]+/g;

const generateToken = () => {
  const initialToken = Math.random().toString(36).replace(regex, '');
  const token = initialToken.length < 12 ? `${initialToken}44444` : `${initialToken}4444`;

  return { token };
};

const validateToken = rescue(async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      message: 'Token não encontrado',
    });
  }

  if (token && token.length < 10) {
    return res.status(401).json({
      message: 'Token inválido',
    });
  }

  return next();
});

module.exports = {
  generateToken,
  validateToken,
};
