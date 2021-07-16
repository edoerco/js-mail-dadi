// Chiedi all’utente la sua email.
var mail = prompt('Inserisci la tua email')
console.log(mail)

// Controlla che sia nella lista di chi può accedere.
var list = ['edoardo@gmail.com', 'alberto@gmail.com', 'dario@gmail.com', 'davide@gmail.com', 'vito@gmail.com']

// soluzione 1
// for(var i = 0; i < list.length; i++) {
//     console.log(list[i])
    
//     if(mail == list[i]) {
//         // Stampa un messaggio appropriato sull’esito del controllo.
//         alert('Benvenuto');
//     }
// }

// Esce solo Benvenuto ma non Ritenta

// Soluzione 2
var flag = false;

for(i = 0; i < list.length; i++) {
    if(mail == list[i]) {
        flag = true;
    }
}
// Stampa un messaggio appropriato sull’esito del controllo.
if (flag == true) {
    alert('Benvenuto');
}
else {
    alert('Ritenta');
}

console.log(flag)