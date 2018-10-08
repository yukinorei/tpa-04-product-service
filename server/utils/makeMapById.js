const makeMapById = function(products) {
  const map = {};
  products.forEach((product) => {
    map[product.id] = product;
  });
  return map;
};

module.exports = makeMapById;
