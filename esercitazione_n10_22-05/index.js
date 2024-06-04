//Direzioni
function indicazioni(...directions){
    for (let direction of directions) {
        //stampa la direzione 
        console.log(direction);
    }
}

indicazioni('su', 'su', 'sinistra'); 
// output:
// 'su'
// 'su'
// 'sinistra'


//Contare le direzioni 
function contaIndicazioni(...directions){
    const counts = { su: 0, giu: 0, sinistra: 0, destra: 0}

    for (let direction of directions) {
        if (direction in counts) {
            counts[direction]++;
             //stampa la direzione attuale 
             console.log(direction);
        }
    }
 
    //verificare i risultati
    console.log(counts);
    return counts;
}

contaIndicazioni('su', 'giu', 'sinistra', 'destra');


//Conta i click 
let count = 0; 
const countClick = () =>  {
    count++; 
    console.log('click -> ${count}');
}

document.body.onclick = countClick;

// output:
// click -> 1
// click -> 2
// click -> 3
