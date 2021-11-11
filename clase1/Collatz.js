function collatz(n) {
    var step = 3*n + 1;
    const steps = [];
    steps.push(n);
    steps.push(step);
    while(step!=1){
        if(step%2!=0){
            step = 3*step+1;
            steps.push(step);
        }
        else{
            step = step/2;
            steps.push(step);
        }
    }
    return steps;
    
}




let arr = collatz(37);
console.log(arr);
