const fs = require('fs').promises;
const path = require('path');
const rescue = require('express-rescue');
const cs = require('../crush.json');

const readCrushsFile = async () => {
  const file = await fs.readFile(
    path.join(__dirname, '..', 'crush.json'),
    'utf8',
    (err, data) => {
      if (err) return err;
      return data;
    },
  );

  return JSON.parse(file);
};

const writeCrushsFile = async (file) => {
  await fs.writeFile(
    path.join(__dirname, '..', 'crush.json'),
    JSON.stringify(file),
    'utf8',
    (err) => err,
  );
  return readCrushsFile();
};

const getAllCrushs = rescue(async (_req, res) => {
  const crushs = await readCrushsFile();

  res.status(200).json(crushs);
});

const getCrushById = rescue(async (req, res) => {
  const id = parseInt(req.params.id);

  const crushs = await readCrushsFile();

  const crush = crushs.find(({ id: crushId }) => crushId === id);

  if (!crush) return res.status(404).json({ message: 'Crush não encontrado' });

  return res.status(200).json(crush);
});

const getCrushsByName = rescue(async (req, res) => {
  const { q } = req.query;

  const crushs = await readCrushsFile();

  const filteredCrushs = crushs.filter(({ name }) => name.includes(q));

  if (!filteredCrushs) return res.status(404).json({ message: 'nome não encontrado' });

  res.status(200).json(filteredCrushs);
});

const createCrush = rescue(async (req, res) => {
  const { name, age, date } = req.body;

  const crushs = await readCrushsFile();

  const id = parseInt(crushs[crushs.length - 1].id) + 1;

  crushs.push({ name, age, id, date });

  const newCrushs = await writeCrushsFile(crushs);

  const createdCrush = newCrushs[crushs.length - 1];

  res.status(201).json(createdCrush);
});

const updateCrush = rescue(async (req, res) => {
  const id = parseInt(req.params.id);
  const { name, age, date } = req.body;

  const crushs = await readCrushsFile();

  const crush = crushs.find(({ id: crushId }) => crushId === id);

  if (!crush) return { err: { message: 'Crush não encontrada' } };

  const indexOfCrush = crushs.indexOf(crush);

  crushs[indexOfCrush] = { name, age, id, date };

  const newCrushs = await writeCrushsFile(crushs);

  const updatedCrush = newCrushs[id - 1];

  return res.status(200).json(updatedCrush);
});

const deleteCrush = rescue(async (req, res) => {
  const id = parseInt(req.params.id);

  const crushsList = await readCrushsFile();

  const newCrushsList = crushsList.filter(({ id: crushId }) => crushId !== id);

  await writeCrushsFile(newCrushsList);

  res.status(200).json({ message: 'Crush deletado com sucesso' });
});

module.exports = {
  getAllCrushs,
  getCrushById,
  getCrushsByName,
  createCrush,
  updateCrush,
  deleteCrush,
};
