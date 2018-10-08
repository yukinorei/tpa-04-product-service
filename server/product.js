const products = require('./data/products.json');
const { makeMapById } = require('./utils/makeMapById');

const productsById = makeMapById(products);

const getProducts = function() {
  return products;
};

const getTotalPrice = function(productIds) {
  return productIds
    .map(id => productsById[id])
    .reduce((total, product) => {
      return total + product.price;
    }, 0);
};

module.exports = {
  getProducts,
  getTotalPrice,
};
