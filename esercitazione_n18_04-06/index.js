console.log('counter');
const div = document.querySelector('.counter');
const p = document.createElement('p');

p.textContent = new Date();

const intervalId = setInterval(() => {
    p.textContent = new Date(); 
    console.log(p.textContent)
}, 1000)

setTimeout(() => {
    p.textContent = `Timeout ${new Date()}`;
    createInterval(intervalId); 
}, 10000)


div.appendChild(p); 
console.log(p)