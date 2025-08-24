const fibonacci = function(n) {
     if (n < 0) {
        return "OOPS";
    }
    
    if (typeof(n) === 'string') {
        n = parseInt(n);
    }

    cache = {}

    function fibonacciHelper(n) {
        if (n in cache) {
            return cache[n];
        }
        if (n===0){
            cache[n] = 0;
            return 0;
        }
        if (n===1){
            cache[n] = 1;
            return 1;
        }
        cache[n] = fibonacciHelper(n-1) + fibonacciHelper(n-2);
        console.log(cache)
        return cache[n];
    }

    return fibonacciHelper(n);
}

// Do not edit below this line
module.exports = fibonacci;
