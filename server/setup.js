const express = require('express');
const { getProductsObj } = require('./controller.js');

const setup = (app) => {
  const apiRouter = express.Router();
  apiRouter.get('/products', getProductsObj);
  app.use('/api', apiRouter);
};

module.exports = setup;
