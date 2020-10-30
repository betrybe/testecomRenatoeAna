const errorObject = {
  email_required: { message: 'O campo "email" é obrigatório', status: 400 },
  password_required: {
    message: 'O campo "password" é obrigatório',
    status: 400,
  },
  name_required: {
    message: 'O campo "name" é obrigatório',
    status: 400,
  },
  age_required: {
    message: 'O campo "age" é obrigatório',
    status: 400,
  },
  invalid_email: {
    message: 'O "email" deve ter o formato "email@email.com"',
    status: 400,
  },
  invalid_password: {
    message: 'A "senha" deve ter pelo menos 6 caracteres',
    status: 400,
  },
  invalid_name: {
    message: 'O "name" deve ter pelo menos 3 caracteres',
    status: 400,
  },
  invalid_age: {
    message: 'O crush deve ser maior de idade',
    status: 400,
  },
  invalid_date: {
    message: 'O campo "date" é obrigatório e "datedAt" e "rate" não podem ser vazios',
    status: 400,
  },
  invalid_rate: {
    message: 'O campo "rate" deve ser um inteiro de 1 à 5',
    status: 400,
  },
  invalid_datedAt: {
    message:  'O campo "datedAt" deve ter o formato "dd/mm/aaaa"',
    status: 400,
  },
  invalid_token: {
    message:  'Token inválido',
    status: 401,
  },
  no_token: {
    message:  'Token não encontrado',
    status: 401,
  },
  not_found: {
    message:  'Crush não encontrado',
    status: 404,
  },
};

module.exports = (err, req, res, _next) => {
  console.log(err);
  if (err)
    return res
      .status(errorObject[err].status)
      .json({ message: errorObject[err].message });

  return res.status(500).json({ message: 'Internal Error' });
};
