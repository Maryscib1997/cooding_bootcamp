const coder = {
    firstName: 'Mariadomenica', // coppia chiave - valore : "firstName" - "Luca"
    lastName: 'Scibilia',
    age: 26,
    skills: ['JavaScript', 'HTML', 'CSS'],
    address: {
        city: 'Catania',
        zipCode: '95100'
    }
};

// Stampare skill presenti in coder.skills
coder.skills.forEach(skill => console.log(skill));

// Chiedere all'utente di inserire country e street
const country = prompt("Inserisci il paese:");
const street = prompt("Inserisci la via:");

coder.address.country = country; 
coder.address.street = street; 

console.log(coder.firstName);
console.log(coder.age);
console.log(coder.address);
console.log(coder.address.city);
console.log(coder.address.zipCode);
console.log(coder.skills[0]);

// stampare tutte le chiavi presenti nell'oggetto coder
Object.keys(coder).forEach(key => console.log(key));

for(let key in coder){ // "firstName"
   const value = coder[Key]; 
   const firstLetter = key[0].toLowerCase(); 
   if (['a', 'e', 'i', 'o', 'u'].includes(firstLetter)) {
   console.log (`${key}: ${value}`);
  }
}

// chiediamo all'utente cosa vuole salvare 
const key = prompt('Che città vuoi salvare?');
const value = prompt('Che nome vuoi salvare?');

coder[key] = value; 

console.log(coder.firstName);
console.log(coder.age);
console.log(coder.address);
console.log(coder.address.city);
console.log(coder.address.zipCode);
console.log(coder.skills[0]);


Object.keys(coder).forEach(key => console.log(key));

// Per ogni proprietà presente dentro il nostro oggetto, controllare la chiave
for (let key in coder) {
    const value = coder[key];
    const firstLetter = key[0].toLowerCase();
    if (['a', 'e', 'i', 'o', 'u'].includes(firstLetter)) {
        console.log(`${key}: ${value}`);
    }
}