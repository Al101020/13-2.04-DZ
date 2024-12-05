// import isValidCart from './validators';

export default class CartFormaWidget {
  constructor(parentEl) {
    this.parentEl = parentEl;

    // this.onSubmit = this.onSubmit.bind(this);
  }

  static get markup() {
    return `
    <div class="containerCart">
        <div class="kartaPic visa">visa</div>
        <div class="kartaPic"></div>
        <form class="Karta-form-widget">
            <input data-id="Karta-input" type="text">
            <button data-id="Karta-input">Click to Validate</button>
        </form>
    </div>
        `;
  }

  bindToDOM() {
    this.parentEl.innerHTML = CartFormaWidget.markup;

    // this.element = this.parentEl.querySelector(CartFormaWidget.selector);
    // this.submit = this.element.querySelector(CartFormaWidget.submitSelector);
    // this.input = this.element.querySelector(CartFormaWidget.inputSelector);

    // this.element.addEventListener('submit', this.onSubmit);
  }
}

// import isValidInn from './validators';

// export default class InnFormWidget {
//   constructor(parentEl) {
//     this.parentEl = parentEl;

//     this.onSubmit = this.onSubmit.bind(this);
//   }

//   static get markup() {
//     return `
//             <form class="innogrn-form-widget">
//                 <div class="form-control">
//                     <label for="innogrn-input">Введите ИНН/ОГРН</label>
//                     <input id="innogrn-input" data-id="innogrn-input" type="text">
//                 </div>
//                 <button data-id="innogrn-submit">далее</button>
//             </form>
//         `;
//   }

//   static get selector() {
//     return '.innogrn-form-widget';
//   }

//   static get inputSelector() {
//     return '.input';
//   }

//   static get submitSelector() {
//     return '.submit';
//   }

//   bidToDOM() {
//     this.parentEl.innerHTML = InnFormWidget.markup;

//     this.element = this.parentEl.querySelector(InnFormWidget.selector);
//     this.submit = this.element.querySelector(InnFormWidget.submitSelector);
//     this.input = this.element.querySelector(InnFormWidget.inputSelector);

//     this.element.addEventListener('submit', this.onSubmit);
//   }

//   onSubmit(e) {
//     e.preventDefault();

//     const { value } = this.input;

//     if (isValidInn(value)) {
//       this.input.classList.add('valid');
//       this.input.classList.remove('invalid');
//     } else {
//       this.input.classList.add('invalid');
//       this.input.classList.remove('valid');
//     }

//     console.log('submit');
//   }
// }
