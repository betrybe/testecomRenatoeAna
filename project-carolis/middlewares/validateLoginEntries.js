const rescue = require('express-rescue');

const validateLoginEntries = rescue(async (req, res, next) => {
  const { email, password } = req.body;

  const regexEmail = /^[a-zA-Z0-9._]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;

  if (!email || !password)
    return res.status(400).json({
      message: `O campo "${!email ? 'email' : 'password'}" é obrigatório`,
    });

  if (!regexEmail.test(email))
    return res
      .status(400)
      .json({ message: 'O "email" deve ter o formato "email@email.com"' });

  if (password.length < 6)
    return res
      .status(400)
      .json({ message: 'A "senha" deve ter pelo menos 6 caracteres' });

  return next();
});

module.exports = validateLoginEntries;
