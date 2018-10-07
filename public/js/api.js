const getProducts = function() {
  return fetch('/api/products')
    .then(resp => resp.json());
};

const getPrice = function(ids) {
  return fetch(`/api/price?ids=${ids.join(',')}`)
    .then(resp => resp.json());
};

export {
  getPrice,
  getProducts,
};
