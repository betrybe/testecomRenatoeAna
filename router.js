const { Router } = require('express');
const rescue = require('express-rescue');
const model = require('./model')
const validate = require('./middlewares/validate/index')

const crush = Router();

crush.post('/', rescue(validate.crush), rescue(async (req, res) => {
  const { name, age, date } = req.body;
  const newCrush = await model.postCrush(name, age, date);
  console.log(newCrush)
  res.status(201).json(newCrush);
}));

crush.get('/', rescue(async (req, res) => {
  const crushList = await model.findAll();
  res.status(200).json(crushList);
}));


crush.get('/search', rescue(async (req, res, next) => {
  const { q } = req.query;

  const crushFiltered = await model.findByName(q);
  console.log('crushFiltered:', crushFiltered)

  if (!crushFiltered) return next({ message: 'Crush não encontrada' });

  return res.json(crushFiltered);
}));


crush
  .get('/:id', rescue(async (req, res, next) => {
  const { id } = req.params;
  const crush = await model.findById(id);

  if (!crush) return next('not_found');

  return res.json(crush);
}))


crush.put('/:id', rescue(validate.crush), rescue(async (req, res) => {
  const { id } = req.params;
  const { name, age, date } = req.body;
  const updated = await model.editCrush(id, name, age, date);

  return res.json(updated);
}));



crush.delete('/:id', rescue(async (req, res) => {
  const { id } = req.params;

  /* const deleted =  */await model.deleteCrush(id);
  return res.status(200).json({ message: 'Crush deletado com sucesso'});
}));

module.exports = crush;
