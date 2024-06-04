import { cakes } from "./data/cakes.js";
import { cardElGen, cardListGen } from "./modules/components.js";

const main = document.querySelector('main');
const cardList = cardListGen();

for (let i = 0; i < cakes.length; i ++) {
  const cardEl = cardElGen(cakes[i]);
  cardList.append(cardEl);
}

window.onload = main.append(cardList);