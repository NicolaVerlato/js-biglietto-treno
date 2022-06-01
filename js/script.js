// chiedere numero di km
const distance = parseInt (prompt ('Quanti km vuoi percorrere?'));
// chiedere età
const userAge = parseInt (prompt ('Quanti anni hai?'));

// LOGICA
// prezzo al km
const ticketPrice = (distance * 0.21);

// sconto under18
const discountUnder18 = (ticketPrice * 20 / 100);
const discountedUnder18 = (ticketPrice - discountUnder18);

// sconto over65
const discountOver65 = (ticketPrice * 40 / 100);
const discountedOver65 = (ticketPrice - discountOver65);

// prezzo in base all'età
let userMessage;
if (userAge < 18) {
    userMessage = discountedUnder18.toFixed(2);
} else if (userAge > 65) {
    userMessage = discountedOver65.toFixed(2);
} else {
    userMessage = ticketPrice.toFixed(2);
}

// RISULTATO IN PAGINA
document.getElementById('price').innerHTML = 'Il prezzo del tuo biglietto è: €' + userMessage;