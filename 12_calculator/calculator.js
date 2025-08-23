const add = function(...theArgs) {
  return theArgs.reduce((accumulator, current) => accumulator + current, 0);
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((accumulator, current) => accumulator + current, 0);
};

const multiply = function(arr) {
	return arr.reduce((accumulator, current) => accumulator * current, 1);
};

const power = function(a, b) {
  return a ** b;
};

let cache = {}; // Added memoization to the factorial

const factorial = function(a) {
  if (a === 0 || a === 1) return 1;
  if (a in cache) return cache[a];
  const result = a * factorial(a - 1);
  cache[a] = result;
  return result;
};  

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
