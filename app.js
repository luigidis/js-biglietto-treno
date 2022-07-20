console.log('ciao')

// CHIEDO IL TRAGITTO IN KM
const itineraryLength = parseFloat( prompt('Quanti km hai intenzione di percorrere?'))

console.log(itineraryLength)

// CHIEDO L'ETA' DEL PASSEGGERO
const customerAge = parseInt( prompt('Quanti anni ha il passeggero?'))

console.log(customerAge)

// MI CALCOLO IL PREZZO PIENO

const ticketFullPrice = (Number.parseFloat(0.21 * itineraryLength).toFixed(2))
console.log (ticketFullPrice)

if ( !isNaN(itineraryLength) && !isNaN(customerAge)) {
    if ( (customerAge >= 18) && (customerAge <= 65) ) {
        document.write('Il prezzo del biglietto è: €\n' + ticketFullPrice);
    }   else if (customerAge < 18) {
            document.write('Il prezzo del biglietto è: €\n' + (Number.parseFloat(ticketFullPrice * 0.80).toFixed(2)))
        }   if (customerAge >65) {
                document.write('Il prezzo del biglietto è: €\n' + (Number.parseFloat(ticketFullPrice * 0.60).toFixed(2)))
            }
                console.log(ticketFullPrice)
}
// SE L'UTENTE NON HA NE SOTTO I 18 NE SOPRA I 65 ANNI ALLORA NON APPLICO SCONTO

// SE L'UTENTE HA MENO DI 18 ANNI APPLICO UNO SCONTO DEL 20%

// SE L'UTENTE HA PIU' DI 65 ANNI APPLICO UNO SCONTO DEL 40%








