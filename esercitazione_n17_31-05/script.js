import { cakes, cakeType } from "./data/cakes.js";
import { cardElGen, cardListGen, btnGen } from "./modules/components.js";

const main = document.querySelector('main');
const cardList = cardListGen();
const btnAdd = document.querySelector('.new-item__btn');
const filterBtn = document.querySelector('.new-item');

// nuovo elemento aggiungere
const newCake = {
  id: 13,
  title: "Real Cholocate Cake",
  previewDescription: "A cake made of chocolate",
  detailDescription: "This decadent dessert features a perfectly balanced blend of the finest cocoa and premium ingredients, creating a heavenly texture that's both light and fudgy. Each bite melts in your mouth, delivering an intense chocolate flavor that's sure to satisfy your sweet cravings.",
  image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1989&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
}

// // ciclo for che genera l'inserimento della nuova card alla lista
// // for (let i = 0; i < cakes.length ; i ++) {
// //   const cardEl = cardElGen(cakes[i]);
// //   cardList.append(cardEl);
// }

const reloadList = (items) => { 
  cardList.innerHTML= ''
  items.forEach((singleCake) => {
    const cardEl = cardElGen(singleCake);
    cardList.append(cardEl);
  })
}
reloadList(cakes)

const listTypeCake = () => {
    cakeType.forEach(type => {
    const btnType = btnGen(type);
    
   btnType.addEventListener("click", function() {
  const newCakeArray = cakes.filter(singleCake => singleCake.type.toLowerCase() === this.id);
  reloadList(newCakeArray)
  })
   filterBtn.append(btnType);
   console.log(btnType)
  })
}

// invece con il forEach risparmiamo righe di codice. E andiamo a prendere direttamente l'array.

  window.onload = main.append(cardList, listTypeCake());

  // Aggiungo la modale
var modal = document.getElementById("myModal");

// seleziono lo span dove si trova la 'x' per chiudere la modale
var span = document.querySelector('.close')
  
// funzione che al click del button aggiunge la card
btnAdd.addEventListener("click", function() {
  // questo if con il some è un controllo per vedere se l'elemento c'è.
  if(cakes.some(i => i.id === newCake.id)) { //Se nell'indice cakes non c'è l'id della lista newCake allora vai a riga 49 altrimenti scendi sotto alla riga 43
      modal.style.display = "block"; //questo attiva la modale e con display block fa spuntare il messaggio
      span.onclick = function() { //questa invece è la funzione che se clicco sullo span che contiene la x mi toglie il messaggio con display none
        modal.style.display = "none";
      }
    console.log('La torta esiste già');
    // altrimenti fa ciò che viene dopo
  } else {
  cakes.push(newCake);
  const newCardEl = cardElGen(newCake);
  cardList.append(newCardEl);
  }
})

