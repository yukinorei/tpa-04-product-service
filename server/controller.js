const { getProducts, getTotalPrice } = require('./product.js');

const getProductsObj = (req, res) => {
  const productObj = { products: getProducts() };
  res.json(productObj);
};

const getTotalPriceHandler = (req, res) => {
  console.log(req, res);
  const getIds = req.query.ids;
  const productIds = getIds.split(',');
  const total = getTotalPrice(productIds);
  const productObj = {
    productIds,
    total,
  };
  res.json(productObj);
};

module.exports = {
  getProductsObj,
  getTotalPriceHandler,
};
