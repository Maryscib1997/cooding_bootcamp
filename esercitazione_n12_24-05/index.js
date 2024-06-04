// Crea elemento h1
const newHeading = document.createElement('h1');
newHeading.textContent = 'Titolo aggiunto con JavaScript';

// Seleziona contenitore per il nuovo h1
const container = document.getElementById('container');

// Inserire il nuovo h1 
container.insertAdjacentElement('afterbegin', newHeading);

// Creiamo un elemento p
const newParagraph = document.createElement('p');
newParagraph.textContent = 'Paragrafo aggiunto con JavaScript';

// Aggiungiamo il nuovo p 
container.append(newParagraph);


//pulsante dinamico
const resetBtn = document.querySelector('[data-reset]');
const clickBtn = document.querySelector('[data-increment]');

console.log(this); // window

if (resetBtn && clickBtn) {

    resetBtn.onclick = function() {
        console.log('click sul reset'); 
        const currentWidth = clickBtn.getBoundingClientRect().width; 
        clickBtn.style.minWidth = '${currentWidth}px'; 

        clickBtn.innerHTML = 0; 
    }
}

clickBtn.onclick = function () {
    const html = this.innerHTML; 
    const count = Number(html) || 0;
    this.innerHTML = count + 1;
};

resetBtn.onmouseenter = logInnerHTML;
clickBtn.onmouseenter = logInnerHTML;

function logInnerHTML (){
    console.log(this.innerHTML);
}


//elenco dei nomi 
const formEl = document.querySelector('form');
const inputEl = document.getElementById('nomi');
const listEl = document.querySelector('.list');

formEl.onsubmit = function(event){
    event.preventDefault(); // prevedi comportamento del modulo
    console.log(event);

    const inputValue = inputEl.value.trim(); //ottieni valore dell'input 

    //verifica se il valore è una stringa valida con almeno uno spazio al suo interno
    if (inputValue && inputValue.includes('')) {
        const li = document.createElement('li'); // crea nuovo elemento li
        li.textContent = inputValue; // Imposta testo dell'elemento <li> con il valore input
        listEl.appendChild(li); // Inserisci l'elemento <li> nella lista

        // Aggiungi una funzione al click del nuovo elemento
        li.onclick = function(){
            console.log('Hai cliccato su:', inputValue);
        }

        inputEl.value = ''; // Resetta il valore dell'input dopo l'invio
    }
}