import isValidCard from './validators';
import algoritmLuna from './algoritmLuna';

export default class CardFormWidget {
  constructor(parentEl) {
    this.parentEl = parentEl;

    this.onSubmit = this.onSubmit.bind(this);
  }

  static get markup() {
    return `
      <div class="containerCard">
        <div class="cardPic mir">МИР</div>
        <div class="cardPic americanExpress">American Express<br>Diner's Club  ...</div>
        <div class="cardPic visa">Visa</div>
        <div class="cardPic masterCard">MasterCard</div>
        <div class="cardPic discover">Discover<br>China Union Pay</div>
        <form class="card-form-widget">
          <label for="card-input">№ карты =></label>
          <input type="text" data-id="card-input" class="input">
          <button class="submit">Click to Validate</button>
        </form>
      </div>
    `;
  }

  static get selector() {
    return '.card-form-widget';
  }

  static get inputSelector() {
    return '.input';
  }

  static get submitSelector() {
    return '.submit';
  }

  bindToDOM() {
    this.parentEl.innerHTML = CardFormWidget.markup;

    this.element = this.parentEl.querySelector(CardFormWidget.selector);
    // console.log(this.element);
    this.submit = this.element.querySelector(CardFormWidget.submitSelector);
    // console.log(this.submit);
    this.input = this.element.querySelector(CardFormWidget.inputSelector);
    console.log(this.input);

    this.element.addEventListener('submit', this.onSubmit);
  }

  onSubmit(e) {
    e.preventDefault();

    const { value } = this.input;
    console.log(algoritmLuna(value));

    if (isValidCard(value) && algoritmLuna(value)) {
      this.input.classList.add('valid');
      this.input.classList.remove('invalid');
    } else {
      this.input.classList.add('invalid');
      this.input.classList.remove('valid');
    }
  }
}
