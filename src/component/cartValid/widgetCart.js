import isValidCart from './validators';

export default class CartFormWidget {
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
          <input type="text" data-id="cart-input" class="input">
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
    this.parentEl.innerHTML = CartFormWidget.markup;

    this.element = this.parentEl.querySelector(CartFormWidget.selector);
    // console.log(this.element);
    this.submit = this.element.querySelector(CartFormWidget.submitSelector);
    // console.log(this.submit);
    this.input = this.element.querySelector(CartFormWidget.inputSelector);
    console.log(this.input);

    this.element.addEventListener('submit', this.onSubmit);
  }

  onSubmit(e) {
    e.preventDefault();

    const { value } = this.input;

    if (isValidCart(value)) {
                    console.log(value);
      this.input.classList.add('valid');
      this.input.classList.remove('invalid');
    } else {
      this.input.classList.add('invalid');
      this.input.classList.remove('valid');
    }
  }
}
