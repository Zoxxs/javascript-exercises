const reverseString = function(string) {
  stringToArray = string.split(``).reverse().join(``);
  return stringToArray;
};

reverseString('NumberOne');

// Do not edit below this line
module.exports = reverseString;
