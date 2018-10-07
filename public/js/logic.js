import { getPrice } from './api.js';
import { renderTotalPrice } from './view.js';

const state = {
  selectedProductIds: [],
};

const isSelected = function(id) {
  return state.selectedProductIds.indexOf(id) > -1;
};

const addSelection = function(id) {
  if (isSelected(id)) {
    return false;
  }
  state.selectedProductIds.push(id);
  return true;
};

const removeSelection = function(id) {
  const idxOfId = state.selectedProductIds.indexOf(id);
  if (idxOfId > -1) {
    state.selectedProductIds.splice(idxOfId, 1);
    return true;
  }
  return false;
};

const toggleElementSelection = function(el) {
  const id = el.getAttribute('data-id');
  if (isSelected(id)) {
    removeSelection(id);
    el.classList.remove('selected');
  } else {
    addSelection(id);
    el.classList.add('selected');
  }
};

const handleProductClick = function() {
  toggleElementSelection(this);
};

const handlePriceButtonClick = function() {
  if (state.selectedProductIds.length) {
    getPrice(state.selectedProductIds)
      .then((jsonResponse) => {
        const { total } = jsonResponse;
        renderTotalPrice(total);
      });
  } else {
    renderTotalPrice(0);
  }
};

export {
  handlePriceButtonClick,
  handleProductClick,
};
