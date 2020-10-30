const rescue = require('express-rescue');
const express = require('express');
const bodyParser = require('body-parser');
const router = require('./router');
const crypto = require('crypto');
const validate = require('./middlewares/validate/index');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(bodyParser.json());

app.post('/login', rescue(validate.login), (_req, res) => {

  const token = crypto.randomBytes(8).toString('hex');
  return res.status(200).json({ token });
});

app.use(rescue(validate.token));

app.use('/crush', rescue(router));

app.use(errorHandler)

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.listen(3000, () => console.log('e é isso'))
