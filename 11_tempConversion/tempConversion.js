const convertToCelsius = function(temp_f) {
  return parseFloat(((temp_f - 32) * 5/9).toFixed(1));
};

const convertToFahrenheit = function(temp_c) {
  return parseFloat(((temp_c * 9/5) + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
