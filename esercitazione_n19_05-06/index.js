<<<<<<< HEAD
// Funzione globale che logga il contesto (this) e l'elemento target (event.target)
function logContext(event) {
    console.log('This:', this);
    console.log('Event Target:', event.target);
}

const divParent = document.querySelector(".container");
const button1El = document.querySelector(".button1");
const button2El = document.querySelector(".button2");
const button3El = document.querySelector(".button3");

// EVENT LISTENER in ascolto su ogni singolo button element
button1El.addEventListener("click", function(event) {
    console.log("sono button1");
    logContext.call(this, event);
});

button2El.addEventListener("click", function(event) {
    console.log("sono button2");
    logContext.call(this, event);
});

button3El.addEventListener("click", function(event) {
    console.log("sono button3");
    logContext.call(this, event);
=======
// Funzione globale che logga il contesto (this) e l'elemento target (event.target)
function logContext(event) {
    console.log('This:', this);
    console.log('Event Target:', event.target);
}

const divParent = document.querySelector(".container");
const button1El = document.querySelector(".button1");
const button2El = document.querySelector(".button2");
const button3El = document.querySelector(".button3");

// EVENT LISTENER in ascolto su ogni singolo button element
button1El.addEventListener("click", function(event) {
    console.log("sono button1");
    logContext.call(this, event);
});

button2El.addEventListener("click", function(event) {
    console.log("sono button2");
    logContext.call(this, event);
});

button3El.addEventListener("click", function(event) {
    console.log("sono button3");
    logContext.call(this, event);
>>>>>>> f5516dda867c56536613e003d050e9e758f98dfc
});