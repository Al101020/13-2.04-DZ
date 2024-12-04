// const app = 'app.js';
// console.log(app);

import InnFormWidget from './widget';

const container = document.querySelector('.container');
const form = new InnFormWidget(container);

form.bidToDOM();
