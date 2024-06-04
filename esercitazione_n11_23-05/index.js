// selezione l'elemento con id heading
const headingEl = document.querySelector ('#heading'); 
const heading = 'Nuovo titolo';

// stampa l'elemento nella console 
console.log(headingEl.outerHTML);

//per ogni elemento buttun presente in pagina stampiamo in console il suo testo 
const buttonEls = document.querySelectorAll('button');

for (const buttonEl of buttonEls) {
    console.log(buttonEl.textContent); 
}