console.log('js ok');

let finalPrice;

const userName = document.getElementById('user-name');
const userKm = document.getElementById('user-km');
const userAge = document.getElementById('age');

const btnCalc = document.getElementById('calcola');
btnCalc.addEventListener('click', function(){
    const kmValue =  parseInt(userKm.value);
    console.log(kmValue);
    const nameValue = userName.value;
    console.log(nameValue);
    const ageValue = userAge.value;
    console.log(ageValue);

    const ticketPrice = kmValue * 0.21;
console.log(`costo biglietto:${ticketPrice}`);


if (ageValue == 'minorenne') {
    const discountYoung = (ticketPrice * 0.20).toFixed(2);
    console.log(`sconto young: ${discountYoung}`);
    finalPrice = (ticketPrice - discountYoung).toFixed(2);
    console.log(`prezzo scontato young: ${finalPrice}`);
}
else if (ageValue == 'over65') {
    const discountSenior = (ticketPrice * 0.40).toFixed(2);
    console.log (`sconto senior: ${discountSenior}`);
    finalPrice = (ticketPrice - discountSenior).toFixed(2);
    console.log(`prezzo scontato senior: ${finalPrice}`);
}
else {
    finalPrice = ticketPrice;
    console.log (`prezzo senza sconto: ${finalPrice}`);
}

const displayOfferta = document.getElementById('offerta');
displayOfferta.innerText = ageValue;

const displayCarrozza = document.getElementById('carrozza');
const coachNumber = Math.floor( Math.random() * 100 +1);
displayCarrozza.innerText = coachNumber;

const displayCp = document.getElementById('posto');
const cpNumber = Math.floor( Math.random() * 100 +1);
displayCp.innerText = cpNumber;

const prezzo = document.getElementById('prezzo');
prezzo.innerText = finalPrice;   

const displayName = document.getElementById('display-user-name');
displayName.innerText = nameValue;
});


