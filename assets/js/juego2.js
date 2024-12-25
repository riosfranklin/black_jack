let deck         = [];
const tipos      = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K']

/* FUNCTION QUE CREA EL MAZO DE CARTA */
const crearDeck = () =>{
    for(i = 2; i<=10; i++){
        for(let tipo of tipos){
            deck.push(i + tipo);
        }
    }
    for(let tipo of tipos){
        for(let esp of especiales){
            deck.push(esp + tipo);
        }
    }   
    deck = _.shuffle(deck)
    return deck
}

crearDeck();

/* FUNCTION QUE ME DA UNA CARTA DEL MAZO */
const pedirCarta = () =>{
if(deck.length === 0){
    throw 'no hay mas cartas';
}
    let carta = deck.pop();
}
pedirCarta()