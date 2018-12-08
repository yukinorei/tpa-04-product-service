const { getProducts } = require('./product.js');

const getProductsObj = (req, res) => {
  const productObj = { products: getProducts() };
  res.json(productObj);
};

module.exports = {
  getProductsObj,
};
