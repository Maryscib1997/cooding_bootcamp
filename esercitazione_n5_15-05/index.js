const nome = prompt("Qual'è il tuo nome?"); // nome tramite un prompt
const cognome= prompt("Qual'è il tuo cognome?") // cognome tramite un prompt
const nomeValido = nome !== null && nome.length >=3; 
const cognomeValido = cognome !== null && cognome.length >=3; 


console.log("+ nome +"); // stampa il nome 
console.log("+ cognome +"); // stampa il cognome

// Controlliamo che siano validi 

if (!nomeValido) {
    alert("Attenzione, il nome deve contenere almento 3 caratteri"); 
    window.location.reload(); 
} else if (!cognomeValido) {
    alert ("Attenzione, il cognome deve contenere almeno 3 catatteri");
    window.location.reload();
} else {
(nomeValido && cognomeValido) 
    alert("Nome e cognome ")
} 


const primaLettera = nome[0];
const primaLetteraMaiuscola = OK_CHARS.includes(primaLettera);

if (!primaLetteraMinuscola) {
    alert("La prima lettera deve essere una maiuscola!");
    window.location.reload();
} else {
    alert ("Nome e cognome validi")
}