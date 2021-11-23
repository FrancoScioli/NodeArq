let contador = 0;
let tiempoRep = 10000;

const incrementar = () => {
    contador++;
}
function iniciarCiclo(){
    console.log('.');
    contador = 0;
    setTimeout(iniciarCiclo,tiempoRep);
}
iniciarCiclo();

module.exports = incrementar