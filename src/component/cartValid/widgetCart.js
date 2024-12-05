import isValidCart from './validators';

export default class CartFormaWidget {
  constructor(parentEl) {
    this.parentEl = parentEl;

    this.onSubmit = this.onSubmit.bind(this);
  }

  static get markup() {
    return `
      <div class="containerCart">
        <div class="cartPic mir">МИР</div>
        <div class="cartPic americanExpress">American Express<br>Diner's Club  ...</div>
        <div class="cartPic visa">Visa</div>
        <div class="cartPic masterCard">MasterCard</div>
        <div class="cartPic discover">Discover</div>
        <form class="cart-form-widget">
          <label for="cart-input">№ карты =></label>
          <input type="text" data-id="cart-input">
          <button class="submit">Click to Validate</button>
        </form>
      </div>
    `;
  }

  static get selector() {
    return '.cart-form-widget';
  }
    
  static get inputSelector() {
    return '.input';
  }
    
  static get submitSelector() {
    return '.submit';
  }

  bindToDOM() {
    this.parentEl.innerHTML = CartFormaWidget.markup;

    this.element = this.parentEl.querySelector(CartFormaWidget.selector);
    this.submit = this.element.querySelector(CartFormaWidget.submitSelector);
    this.input = this.element.querySelector(CartFormaWidget.inputSelector);

    this.element.addEventListener('submit', this.onSubmit);
  }

  onSubmit(e) {
    e.preventDefault();

    console.log(this.input);

    const { value } = this.input;

    if (isValidCart(value)) {
      this.input.classList.add('valid');
      this.input.classList.remove('invalid');
    } else {
      this.input.classList.add('invalid');
      this.input.classList.remove('valid');
    }

    console.log('submit');
  }
}
