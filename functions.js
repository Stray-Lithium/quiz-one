function addTwoNumbers(numOne, numTwo) {
  // Add two numbers together
  return numOne + numTwo;
};

function minusTwoNumbers(numOne, numTwo) {
  // Minus two numbers
  return numOne - numTwo;
};

function multiplyTwoNumbers(numOne, numTwo) {
  // Multiply two numbers
  return numOne * numTwo;
};

function devideTwoNumbers(numOne, numTwo) {
  return numOne / numTwo;
  // Devide two numbers
};

function evenOrOdd(number) {
// if (number % 2 === 0) {
//   return true;
// } else { 
//   return false;
// };
return number % 2 === 0 //? true : false 
//console.log("The number is even.");
  // Given a number
  // Work out if number is even or odd
}

function greeting() {
  // Given a name
  // Return "Hello, my name is [insert_name]"
}

function getFirstLetter() {
  // Given a name
  // Return the first letter of a name
}

function getInitials() {
  // Given a full name
  // Return the initials
}

function isThereASausage() {
  // Given some text
  // Return true if the text contains the word 'sausage'
}

function turnStringIntoNumber() {
  // Given a number in the form of a string
  // Return a number
}

function turnNumberIntoString() {
  // Given a string of a number
  // Return a string
}

module.exports = {
  addTwoNumbers,
  minusTwoNumbers,
  multiplyTwoNumbers,
  devideTwoNumbers,
  evenOrOdd,
  greeting,
  getFirstLetter,
  getInitials,
  isThereASausage,
  turnStringIntoNumber,
  turnNumberIntoString,
};
