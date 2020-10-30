const { Router } = require('express');
const crushFunctions = require('./crushFunctions');
const { validateCrushEntries, validateToken } = require('../middlewares');

const crush = Router();

crush
  .get('/', validateToken, crushFunctions.getAllCrushs)
  .get('/search', validateToken, crushFunctions.getCrushsByName)
  .get('/:id', validateToken, crushFunctions.getCrushById)
  .post('/', validateToken, validateCrushEntries, crushFunctions.createCrush)
  .put('/:id', validateToken, validateCrushEntries, crushFunctions.updateCrush)
  .delete('/:id', validateToken, crushFunctions.deleteCrush);

module.exports = crush;
