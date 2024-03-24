function isPrimeNumber(n){
    for (var i = 2 ; i < n; i++){
        if(n % i == 0){
            return(`${n} is not a prime number`);
        }
        return(`${n} is a prime number`);
    };
};

var result = isPrimeNumber(5);
console.log(result);