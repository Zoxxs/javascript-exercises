const sumAll = function(integerOne, integerTwo) {
  if (integerOne > integerTwo) {
    [integerOne, integerTwo] = [integerTwo, integerOne];
  }
  if (integerOne < 0 || integerTwo < 0 || typeof integerOne !== `number` || typeof integerTwo !== `number`) {
    return `ERROR`;
  }
  let sum = 0;
  for (let i = integerOne; i <= integerTwo; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
