const palindromes = function (word) {
    const lowerCase = word.toLowerCase().match(/[a-z0-9]/g);
    const reversed = lowerCase.slice().reverse().join("");
    return lowerCase.join("") === reversed;
};

// Do not edit below this line
module.exports = palindromes;
