var fibo = [0,1];

function fiboSeries (n) {
    for(let i = 2; i <= n; i++){
        fibo[i] = fibo[i-2] + fibo[i-1]
    };
    return fibo;
}


var result = fiboSeries(12);
console.log(result);