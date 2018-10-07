import { getProducts } from './api.js';
import { formatYen } from './string-utils.js';

const listeners = {};

const renderTotalPrice = function(totalPrice) {
  const totalPriceEl = document.querySelector('#total-price span');
  totalPriceEl.innerText = formatYen(totalPrice);
};

const renderPriceElement = function(productPrice) {
  const priceEl = document.createElement('h2');
  priceEl.innerText = formatYen(productPrice);
  return priceEl;
};

const renderNameElement = function(productName) {
  const nameEl = document.createElement('h3');
  nameEl.innerText = productName;
  return nameEl;
};

const renderImageElement = function(productImageUrl) {
  const imageEl = document.createElement('img');
  imageEl.setAttribute('src', productImageUrl);
  return imageEl;
};

const renderProduct = function(productData) {
  const {
    id,
    price,
    imageUrl,
    name,
  } = productData;
  const productEl = document.createElement('div');
  productEl.setAttribute('class', 'product');
  productEl.setAttribute('data-id', id);
  productEl.appendChild(renderNameElement(name));
  productEl.appendChild(renderImageElement(imageUrl));
  productEl.appendChild(renderPriceElement(price));
  productEl.addEventListener('click', listeners.handleProductClick);
  return productEl;
};

const renderProducts = function(jsonResponse) {
  const {
    products: productsData,
  } = jsonResponse;
  const productsEl = document.querySelector('.products');
  productsData.forEach((productData) => {
    productsEl.appendChild(renderProduct(productData));
  });
};

const initDOMandListeners = function({
  handlePriceButtonClick,
  handleProductClick,
}) {
  const getPriceButtonEl = document.getElementById('get-total-price');
  getPriceButtonEl.addEventListener('click', handlePriceButtonClick);
  listeners.handleProductClick = handleProductClick;

  getProducts()
    .then(renderProducts);
};

export {
  initDOMandListeners,
  renderTotalPrice,
};
