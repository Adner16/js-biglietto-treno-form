console.log('js ok');

let finalPrice;

const userName = document.getElementById('user-name');
const userKm = parseInt(document.getElementById('user-km'));
console.log(`km di viaggio: ${userKm} `);

const userAge = 
console.log(`età del cliente:${userAge}`);

const ticketPrice = userKm * 0.21;
console.log(`costo biglietto:${ticketPrice}`);

if (userAge < 18) {
    const discountYoung = (ticketPrice * 0.20).toFixed(2);
    console.log(`sconto young: ${discountYoung}`);
    finalPrice = (ticketPrice - discountYoung).toFixed(2);
    console.log(`prezzo scontato young: ${finalPrice}`);
}
else if (userAge >= 65) {
    const discountSenior = (ticketPrice * 0.40).toFixed(2);
    console.log (`sconto senior: ${discountSenior}`);
    finalPrice = (ticketPrice - discountSenior).toFixed(2);
    console.log(`prezzo scontato senior: ${finalPrice}`);
}
else {
    finalPrice = ticketPrice;
    console.log (`prezzo senza sconto: ${finalPrice}`);
}

const prezzo = document.getElementById('prezzo');
prezzo.innerHTML = finalPrice.toFixed(2);   

const DisplayName = document.getElementById('display-user-name');

