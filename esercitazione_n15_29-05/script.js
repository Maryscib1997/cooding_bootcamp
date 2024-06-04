import { cakes } from "./data/cakes.js";
import { cardElGen, cardListGen } from "./modules/components.js";

const main = document.querySelector('main');
const cardList = cardListGen();
const btnAdd = document.querySelector('.new-item__btn');



for (let i = 0; i < cakes.length; i ++) {
  const cardEl = cardElGen(cakes[i]);
  cardList.append(cardEl);
}

window.onload = main.append(cardList); 

const newCake = {
  id: 16,
  title:"Bulla cake",
  previewDescription:"Bulla cake is a rich Jamaican cake made with molasses and spiced with ginger and nutmeg.",
  detailDescription:"Bulla cake, usually referred to as bulla, is a rich Jamaican cake made with molasses and spiced with ginger and nutmeg, sometimes dark-colored and other times light-colored. Bulla are small loaves that are flat and round. They are inexpensive and easy to make using molasses, flour and baking soda. Bulla is traditionally a popular treat for schoolchildren. It is usually eaten with cheese, butter or avocado.",
  image:"https://raw.githubusercontent.com/filippella/Dagger-Rx-Database-MVP/master/cakes/bulla_cake.jpg"
}

btnAdd.addEventListener("click", function(){
  cakes.push(newCake); 
  const NewCardEl = cardElGen(newCake); 
  cardList.append(NewCardEl); 
})

const isEqual = pokemon.some(i => i.id === newPokemon.id)

if (isEqual) {

  console.log("Il pokemon esiste già!");
} else {
  pokemon.push(newPokemon)
  mainSectionEl.append(renderListCard())
}
