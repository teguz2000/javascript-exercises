const add = function(number1, number2) {
	
  return number1 + number2;
};

const subtract = function(number1, number2) {
	
  return number1 - number2;
};

const sum = function(numbers = []) {
	
  let result = 0;

  for(number of numbers)
    result += number;

  return result;
};

const multiply = function(numbers = []) {

  let result = 1;

  for(let number of numbers)
    result *= number;

  return result;
};

const power = function(number1, number2) {
	
  return number1 ** number2;
};

const factorial = function(num) {
	
  if (num < 0) 
      return -1;
  else if (num == 0) 
    return 1;
  else {
    return (num * factorial(num - 1));
  }
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
