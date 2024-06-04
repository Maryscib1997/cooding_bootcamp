import { cakes } from "./data/cakes.js";
import { cardElGen, cardListGen, images } from "./modules/components.js";

const main = document.querySelector('main');
const cardList = cardListGen();

cakes.forEach((cake) => {
  const cardEl = cardElGen(cake);
  cardList.append(cardEl);
});

window.onload = main.append(cardList);


//new item input and button
const addBtn = document.querySelector(".new-item__btn");
 const inputEl = document.querySelector(".new-item__input");

//modal
const modal = document.querySelector(".modal-container");
const closeModalBtn = document.querySelector('.modal-card__btn');

addBtn.addEventListener('click', function() {

  const newCake = {
//generating random number for id
    id: Math.floor(Math.random() * 20 + 1),
    title: inputEl.value,
    previewDescription: "New Cake",
    detailDescription: "",
//generating random img from images array
    image: images[Math.floor(Math.random() * images.length)],
  };


  if (cakes.some((cake) => cake.id === newCake.id)) {
    modal.style.display = "block";

    closeModalBtn.onclick = function() {
      modal.style.display = "none";
    } 
    
    console.log('Exist!', newCake.id);
  } else {
      cakes.push(newCake);
      const newCardEl = cardElGen(newCake);
      cardList.append(newCardEl);
  }

});



