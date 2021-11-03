var asyncforloop = require('@arteysoft/asyncforloop');


/*
    referencia el for canonico
    for (let x = 1; x < 100 ; x++){

    }



asyncforloop(100, (nroIteracion, next, abort) => {
    console.log(nroIteracion)
    if(nroIteracion===55){
        abort(new Error('Guarda que el 55 es mufa (?'))
        return //si no haces el return se sigue ejecutando y llama a next
    }
    next()
}, err => {
    console.log(err)
    console.log('finalizo el asynforloop')    
})*/
fs = require('fs');

asyncforloop(100, (nroIteracion, next, abort) => {
    fs.appendFile('asyncforlooptexto.txt','Estoy en la iteracion' + nroIteracion);
    next()
}, (err) => {
    fs.appendFile('asyncforlooptexto.txt','Termino la iteracion')
})
