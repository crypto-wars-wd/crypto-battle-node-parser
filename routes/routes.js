const { Router } = require('express');

const parserRoutes = new Router();

parserRoutes.use('/node-parser', parserRoutes);

module.exports = parserRoutes;
