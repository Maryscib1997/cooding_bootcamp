// trova il positivo 

const numbers = [-1, -2, -10, 2, 5];
const counterNumbers = numbers.length; 

for (let i = 0; i < counterNumbers; i++){
    if (numbers[i] > 0) {
        console.log ('numeri positivi:', numbers[i]);
    }
}

for (let i = 0; i < counterNumbers; i++){
    if (numbers[i] > 0) {
        console.log ('numeri positivi:', numbers[i]);
        break; 
    }
}

//palindromo 

const parola = prompt('Inserisci parola'); 
const arrayParola = parola.split("");
const palindromo = true; 

for (var i = 0; i <arrayParola.length / 2; i++) { 
    if (arrayParola[i] !== arrayParola[arrayParola.length - i - 1]) {
        console.log ('La palora inserita non è un palindromo'); 
        palindromo = false;
        break; 
    }
}

if (palindromo) {
    console.log('Bravo! La parola inserita è palindroma')
}