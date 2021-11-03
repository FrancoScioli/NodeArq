let _ = require('underscore');
let fs = require('fs');

// concepto de partial application

function suma(x,y){
    return x+y;
}




let suma10 = _.partial(suma,10)
let suma11= _.partial(suma,11)
let suma12 = _.partial(suma,12)

console.log(suma11(100))


// PARA QUE SIRVE ESTO????


// Las funciones async por convencion el ultimo parametro es
// una funcion que tiene primero err, obj

let escribirArch = _.partial(fs.readFile, './sarasa2.txt','utf8')

escribirArch((err,datos)=>{
    console.log(err)
    console.log(datos)
});