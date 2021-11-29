let insertarMySQL = require('./insertarMySql');

let contador = 0;
let tiempoRep = 10000;

const incrementar = () => {
    contador++;
}
function iniciarCiclo(){
    console.log(`La cantidad de httpRequests para el ciclo es de ${contador}`);
    insertarMySQL(contador)
    contador = 0;
    setTimeout(iniciarCiclo,tiempoRep);
}
iniciarCiclo();
module.exports = incrementar