function clear() {
    console.clear();
}

clear(); 

function capitalize(string){
    if (typeof string !== 'string' || string.length === 0 ) {
        return '';
        string.charAt(0).toUpperCase() + string.slice(1).toLowerCase(); 
    }
}

console.log(capitalize('ciao'));     // Ciao
console.log(capitalize('mondo'));    // Mondo
console.log(capitalize('Mondo'));    // Mondo
console.log(capitalize('TEST'));     // Test


function min(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a < b ? a : b;
    }
    return a < b ? a : b;
}

console.log(min(1, 3));     // 1
console.log(min(5, -3));    // -3
console.log(min(100, 20));


function potenza(base, esponente) {
    // Se l'esponente è 0, il risultato è 1
    if (esponente === 0) {
        return 1; 
    }

    const risultato = 1; 
    for (let i = 0; i < esponente; i++) {
        risultato *= base; 
    }

    return risultato; 
}

console.log(potenza(4, 2));    // 16
console.log(potenza(5, 3));    // 125
console.log(potenza(1, 100));  // 1


function factorial(n){

    if (n < 0) {
     return undefined;
    }
    
    if (n === 0) {
     return 1;
    }

    return n*factorial(n-1);
}

console.log(factorial(5)); // 120
console.log(factorial(4));// 24