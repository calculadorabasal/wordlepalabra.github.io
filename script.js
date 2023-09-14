console.log ("hola mundo");

let diccionario = ["APPLE", "MOUSE", "TREES", "MAPPLE"]
fetch('https://random-word-api.herokuapp.com/word?length=5&lang=es')
 	.then(response => response.json())
 	.then(response => {
         console.log(response)
         palabra = response[0].toUpperCase()
         console.log = (palabra)
     })
 	.catch(err => console.error(err));
//let palabra = diccionario [indice];
let indice = Math.floor(Math.random() * diccionario.length-1)+1;
let intentos = 6;

window.addEventListener( "load" , intentar);

function intentar(){
    const INTENTO = leerIntento();
    //pegó la lógica del tutorial
    const GRID = document.getElementById("grid");
    const ROW = document.createElement('div');
    ROW.className = 'row';
    if(INTENTO.length !==5){
        alert("palabra de 5 letras")
        return
    }
    for (let i in palabra){
        const SPAN = document.createElement('span');
        SPAN.className = 'letter';
        if (INTENTO[i]===palabra[i]){ 
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = 'green';
        } else if( palabra.includes(INTENTO[i]) ) { //AMARILLO
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = 'yellow';
        } else {      //GRIS
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = 'red';
        }
        ROW.appendChild(SPAN)
    }
    GRID.appendChild(ROW)
    if(INTENTO === palabra){
        terminar("<h1>GANASTE!</h1>")
        return}
    intentos--
    if (intentos==0){
        terminar("<h1>PERDISTE!</h1>")
        return
    }
}
    
const BUTON = document.getElementById("guess-button");

BUTON.addEventListener("click" , intentar);

function leerIntento(){
    let intento = document.getElementById("guess-input");
    intento = intento.value;
    intento = intento.toUpperCase();
    return intento;
}
function terminar(mensaje){
    const INPUT = document.getElementById("guess-input");
    INPUT.disabled = true;
    BUTON.disabled = true;
    let contenedor = document.getElementById('guesses');
    contenedor.innerHTML = mensaje;
}
