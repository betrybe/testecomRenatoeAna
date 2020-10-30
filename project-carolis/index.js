const express = require('express');
const bodyParser = require('body-parser');
const rescue = require('express-rescue');
const crushRouter = require('./crush/crushRouter');
const { generateToken, validateLoginEntries } = require('./middlewares');

const app = express();

const PORT = 3000;

app.use(bodyParser.json());

app.use('/crush', crushRouter);

app.post('/login', validateLoginEntries, rescue(async (req, res) => {
  const token = generateToken();
  return res.status(200).json(token)
}));

app.listen(PORT, () => console.log(`Escutando na porta ${PORT}`));
