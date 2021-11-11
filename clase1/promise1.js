let fs = require('fs');

function crearPromise(){
    return new Promise((res,rej)=>{
        fs.readFile('sarasa.txt','utf8', (err,datos)=>{
            if(err){
                rej(err)
                return
            }
            res(datos)
        })
    })
}
function crearPromise2(){
    return new Promise((res,rej)=>{
        fs.readFile('sarasa2.txt','utf8', (err,datos)=>{
            if(err){
                rej(err)
                return
            }
            res(datos)
        })
    })
}

crearPromise()
.then(d=>{
    console.log(d)
    return crearPromise2()
})
.then(z=>console.log(z))
.catch(err=>{
    console.log("hubo un error")
    console.log(err)
    console.log("continua la ejecucion")
});