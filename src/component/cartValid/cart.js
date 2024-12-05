import './cart.css';
import CartFormaWidget from './widgetCart';

// import cartFormaWidget from './widgetCart';

console.log('cart.js');
const containerCart = document.querySelector('.container_Cart');
const formCart = new CartFormaWidget(containerCart);

formCart.bindToDOM();
