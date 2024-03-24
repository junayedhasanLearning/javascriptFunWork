function getFactorial(n){
    var factorial = 1;
    for(let i = 1; i <= n;i++){
        factorial = factorial * i;
    }
    return factorial;
}

var result = getFactorial(12);
console.log(result);

function recurFact(n) {
    var fact  = 1;
    for(var i = n; i >= 1; i--){
        fact = fact * i;
    };
    return fact;
}

var factorial = recurFact(10);
console.log(factorial);