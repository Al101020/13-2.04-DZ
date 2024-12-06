// console.log('cart.js');

import './cart.css';
import CartFormWidget from './widgetCart';
// console.log(CartFormaWidget.submitSelector);

const containerCart = document.querySelector('.container_Cart');
const formCart = new CartFormWidget(containerCart);

formCart.bindToDOM();
