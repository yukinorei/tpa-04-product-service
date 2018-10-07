import { initDOMandListeners } from './view.js';
import {
  handlePriceButtonClick,
  handleProductClick,
} from './logic.js';

const initApp = function() {
  initDOMandListeners({
    handlePriceButtonClick,
    handleProductClick,
  });
};

export default initApp;
