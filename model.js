const fs = require('fs').promises;

const crushReader = async () => {
  const crushFile = await fs.readFile('./crush.json', 'utf8');
  return JSON.parse(crushFile);
};

const crushWriter = async (file) => {
  await fs.writeFile('./crush.json', JSON.stringify(file), 'utf8', (err) =>
    console.log(err)
  );
  return crushReader();
};

const postCrush = async (name, age, date) => {
  const crushList = await crushReader();
  const newCrush = { name, age, id: crushList.length + 1, date }
  crushList.push(newCrush);
  await crushWriter(crushList);
  return newCrush;
};

const findByName = async (q) => {
  const crushList = await crushReader();
  if (!q) return false;
  return crushList.filter((cr) =>
    cr.name.toLowerCase().startsWith(q.toLowerCase())
  );
};

const findById = async (id) => {
  const crushList = await crushReader();

  return crushList.find((cr) => cr.id === +id);
};

const editCrush = async (id, name, age, date) => {
  const crushList = await crushReader();
  const crush = crushList.find((cr) => cr.id === +id);
  if (!crush) return next({ message: 'Crush não encontrada' });

  const indexOfCrush = crushList.indexOf(crush);

  crushList[indexOfCrush] = { name, age: +age, id: +id, date };
  const newCrushList = await crushWriter(crushList);
  return newCrushList[indexOfCrush];
};

const deleteCrush = async (id) => {
  const crushList = await crushReader();
  const crush = crushList.find((cr) => cr.id === +id);
  // if(!crush) return next({ message: 'Crush não encontrada'})

  const indexOfCrush = crushList.indexOf(crush);

  crushList.splice(indexOfCrush);
  await crushWriter(crushList);

  return crush;
};

module.exports = {
  postCrush,
  deleteCrush,
  editCrush,
  findById,
  findByName,
  findAll: crushReader,
};
