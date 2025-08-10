const sumAll = function(min, max) {
    // Check for errors
    if (min < 0 || max < 0 || typeof min !== "number" || typeof max !== "number" || !Number.isInteger(max) || !Number.isInteger(min)) {
        return 'ERROR';
    }
    // Swap values if min is greater than max
    if (min > max) {
        [min, max] = [max, min];
    }
    let sum = 0;
    for (let i = min; i <= max; i++) {
        sum += i;
    }
    return sum;
};


// Do not edit below this line
module.exports = sumAll;
