let deck         = [];
const tipos      = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K']

let puntosJugador       = 0;
let puntosComputadora   = 0;
// REFERENCIAS HTML
const btnPedir = document.querySelector('#btnPedir');


/* FUNCTION QUE CREA EL MAZO DE CARTA */

/////////////////////

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

/////////////////////

/* FUNCTION QUE ME DA UNA CARTA DEL MAZO */

/////////////////////

const pedirCarta = () =>{
if(deck.length === 0){
    throw 'no hay mas cartas';
}
    let carta = deck.pop();
    return carta;
}
pedirCarta();

//////////////////////

const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length-1);
    let puntos = 0;

    if (isNaN(valor)){
        
        if(valor === 'A'){
            puntos = 11;
        }else{
            puntos = 10;
        }

    }else{
        puntos = valor * 1;
    }
    return puntos;
}
valorCarta(pedirCarta());

/////////////////////


//EVENTOS

btnPedir.addEventListener('click', ()=>{

    let carta = pedirCarta();
    puntosJugador = puntosJugador + valorCarta(carta);
    let totalPuntosJugador = document.querySelector('small');
    
    totalPuntosJugador.innerHTML = puntosJugador;
    console.log(totalPuntosJugador);

});