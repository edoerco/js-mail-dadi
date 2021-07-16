// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
var nGiocatore = Math.floor(Math.random() * 6) + 1;
console.log('Il numero del giocatore è ' + nGiocatore);

var nComputer = Math.floor(Math.random() * 6) + 1;
console.log('Il numero del computer è ' + nComputer);

// Stabilire il vincitore, in base a chi fa il punteggio più alto.
if (nGiocatore > nComputer) {
    console.log('Il giocatore vince');
    alert('Il Giocatore vince');
}
else if (nGiocatore == nComputer) {
    console.log('Pareggio');
    alert('Pareggio');
}
else {
    console.log('Il computer vince');
    alert('Il computer vince');
}