// console.log('cart.js');

import './cart.css';
import CartFormaWidget from './widgetCart';
// console.log(CartFormaWidget.submitSelector);

const containerCart = document.querySelector('body');
const formCart = new CartFormaWidget(containerCart);

formCart.bindToDOM();
