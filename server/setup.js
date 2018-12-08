const express = require('express');
const { getProductsObj, getTotalPriceHandler } = require('./controller.js');

const setup = (app) => {
  const apiRouter = express.Router();
  apiRouter.get('/products', getProductsObj);
  apiRouter.get('/price', getTotalPriceHandler);
  app.use('/api', apiRouter);
};

module.exports = setup;
