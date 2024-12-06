// console.log('card.js');

import './card.css';
import CardFormWidget from './widgetCard';
// console.log(CardFormaWidget.submitSelector);

const containerCard = document.querySelector('.container_Card');
const formCard = new CardFormWidget(containerCard);

formCard.bindToDOM();
