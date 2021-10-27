let log = console.log

let fn6 = z => {
    log('llegue a fn6');
    setTimeout(()=>{
        log('dentro del setTimeout')
        throw new Error('Fallo')
    },3000)
    setTimeout(()=>{
        log('dentro del setTimeout 2')
        throw new Error('Fallo')
    },5000)
    if(z===1000){
        throw new Error('En nuestra logica z no puede ser 3')
    }
}

let fn5 = () => {
    log('antes de llamar a fn6');
    fn6();
    log('despues de llamar a fn6')
}

let fn4 = () => {
    log('antes de llamar a fn5');
    fn5()
    log('despues de llamar a fn5')
}
let fn3 = () => {
    log('antes de llamar a fn4');
    fn4();
    log('despues de llamar a fn4')
}
let fn2 = () => {
    log('antes de llamar a fn3');
    fn3();
    log('despues de llamar a fn3');
}

let fn1 = () => {
    log('antes de llamar a fn2');
    fn2();
    log('despues de llamar a fn2')
}

fn1();